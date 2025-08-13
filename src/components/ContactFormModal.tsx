import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().min(9, "Numer telefonu musi mieć co najmniej 9 cyfr"),
  company: z.string().optional(),
  nip: z.string().optional(),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormModalProps {
  children: React.ReactNode;
}

const ContactFormModal = ({ children }: ContactFormModalProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      nip: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the data to your backend/Supabase
      console.log("Form data:", data);
      
      toast({
        title: "Dziękujemy za kontakt!",
        description: "Odpowiemy w ciągu 24 godzin.",
      });
      
      form.reset();
      setOpen(false);
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-background border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-3xl font-[100] text-foreground">
            Umów bezpłatną konsultację
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-lg">
            Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Imię i nazwisko *</FormLabel>
                  <FormControl>
                    <Input placeholder="Jan Kowalski" className="h-12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Email *</FormLabel>
                  <FormControl>
                    <Input placeholder="jan@example.com" type="email" className="h-12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Telefon *</FormLabel>
                  <FormControl>
                    <Input placeholder="+48 123 456 789" className="h-12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Nazwa firmy</FormLabel>
                  <FormControl>
                    <Input placeholder="ABC Sp. z o.o." className="h-12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="nip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">NIP</FormLabel>
                  <FormControl>
                    <Input placeholder="123-456-78-90" className="h-12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Opisz swoją sytuację *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Opisz krótko swoją sytuację biznesową..."
                      className="min-h-[120px] resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-col space-y-4 pt-6">
              <Button 
                type="submit" 
                className="bg-gold hover:bg-gold-dark text-primary font-bold h-12 text-lg"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;