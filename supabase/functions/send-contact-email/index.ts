import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.55.0";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  nip?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405,
      headers: corsHeaders 
    });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    // Initialize Supabase client with service role
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Initialize Resend
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    // Store the lead in the database (using existing zalewski_leads table)
    const { error: dbError } = await supabase
      .from("zalewski_leads")
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        contact_method: "email",
        legal_areas: []
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store lead in database");
    }

    // Prepare email content
    const emailSubject = "Nowe zapytanie z formularza kontaktowego";
    const emailHtml = `
      <h2>Nowe zapytanie z formularza kontaktowego</h2>
      <p><strong>Imię i nazwisko:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Telefon:</strong> ${formData.phone}</p>
      ${formData.company ? `<p><strong>Nazwa firmy:</strong> ${formData.company}</p>` : ''}
      ${formData.nip ? `<p><strong>NIP:</strong> ${formData.nip}</p>` : ''}
      <p><strong>Wiadomość:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
        ${formData.message.replace(/\n/g, '<br>')}
      </div>
      
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        Wiadomość została wysłana automatycznie z formularza kontaktowego na stronie internetowej.
      </p>
    `;

    // Send emails with graceful fallback (Resend sandbox may block unverified domains)
    let firmEmailStatus = 'skipped';
    try {
      const firmRes = await resend.emails.send({
        from: "Formularz kontaktowy <onboarding@resend.dev>",
        to: ["adwokat@kzalewski.pl"],
        subject: emailSubject,
        html: emailHtml,
      });
      if ((firmRes as any)?.error) {
        console.error("Email sending error (firm):", (firmRes as any).error);
        firmEmailStatus = 'failed';
      } else {
        firmEmailStatus = 'sent';
        console.log("Email sent successfully to kancelaria@misztalzalewski.pl");
      }
    } catch (e) {
      console.error("Email sending exception (firm):", e);
      firmEmailStatus = 'failed';
    }

    // Send confirmation email to the client
    const confirmationHtml = `
      <h2>Dziękujemy za kontakt!</h2>
      <p>Szanowny/a ${formData.name},</p>
      <p>Otrzymaliśmy Twoje zapytanie i skontaktujemy się z Tobą w ciągu 24 godzin.</p>
      
      <h3>Szczegóły Twojego zapytania:</h3>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Telefon:</strong> ${formData.phone}</p>
      ${formData.company ? `<p><strong>Firma:</strong> ${formData.company}</p>` : ''}
      <p><strong>Wiadomość:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
        ${formData.message.replace(/\n/g, '<br>')}
      </div>
      
      <p style="margin-top: 20px;">
        <strong>Z poważaniem,<br>
        Kancelaria Misztal Zalewski</strong>
      </p>
      
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        Tel: +48 501 047 762<br>
        Email: kancelaria@misztalzalewski.pl
      </p>
    `;

    let clientEmailStatus = 'skipped';
    try {
      const clientRes = await resend.emails.send({
        from: "Kancelaria Misztal Zalewski <onboarding@resend.dev>",
        to: [formData.email],
        subject: "Dziękujemy za kontakt - Kancelaria Misztal Zalewski",
        html: confirmationHtml,
      });
      if ((clientRes as any)?.error) {
        console.error("Email sending error (client):", (clientRes as any).error);
        clientEmailStatus = 'failed';
      } else {
        clientEmailStatus = 'sent';
        console.log("Confirmation email sent to:", formData.email);
      }
    } catch (e) {
      console.error("Email sending exception (client):", e);
      clientEmailStatus = 'failed';
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Lead zapisany. Status e-maili w logach.",
        firmEmailStatus,
        clientEmailStatus
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);