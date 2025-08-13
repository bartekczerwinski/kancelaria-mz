export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      academy_submissions: {
        Row: {
          amount: number
          course_type: string
          created_at: string
          dealership_name: string
          email: string
          id: string
          name: string
          payment_status: string
          phone: string
          position: string
          selected_dates: Json | null
          stripe_session_id: string | null
        }
        Insert: {
          amount: number
          course_type: string
          created_at?: string
          dealership_name: string
          email: string
          id?: string
          name: string
          payment_status?: string
          phone: string
          position: string
          selected_dates?: Json | null
          stripe_session_id?: string | null
        }
        Update: {
          amount?: number
          course_type?: string
          created_at?: string
          dealership_name?: string
          email?: string
          id?: string
          name?: string
          payment_status?: string
          phone?: string
          position?: string
          selected_dates?: Json | null
          stripe_session_id?: string | null
        }
        Relationships: []
      }
      admin_sessions: {
        Row: {
          created_at: string | null
          expires_at: string
          id: string
          session_token: string
        }
        Insert: {
          created_at?: string | null
          expires_at: string
          id?: string
          session_token: string
        }
        Update: {
          created_at?: string | null
          expires_at?: string
          id?: string
          session_token?: string
        }
        Relationships: []
      }
      blog_categories: {
        Row: {
          created_at: string | null
          description_en: string | null
          description_pl: string | null
          id: string
          name_en: string
          name_pl: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description_en?: string | null
          description_pl?: string | null
          id?: string
          name_en: string
          name_pl: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description_en?: string | null
          description_pl?: string | null
          id?: string
          name_en?: string
          name_pl?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_post_tags: {
        Row: {
          id: string
          post_id: string | null
          tag_id: string | null
        }
        Insert: {
          id?: string
          post_id?: string | null
          tag_id?: string | null
        }
        Update: {
          id?: string
          post_id?: string | null
          tag_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_tags_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "blog_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          audio_url_en: string | null
          audio_url_pl: string | null
          author_name: string | null
          canonical_url: string | null
          category_id: string | null
          content_en: string
          content_pl: string
          created_at: string | null
          featured_image_alt_en: string | null
          featured_image_alt_pl: string | null
          featured_image_url: string | null
          id: string
          lead_en: string | null
          lead_pl: string | null
          meta_description_en: string | null
          meta_description_pl: string | null
          meta_title_en: string | null
          meta_title_pl: string | null
          published_at: string | null
          slug: string
          status: string | null
          title_en: string
          title_pl: string
          updated_at: string | null
          view_count: number | null
        }
        Insert: {
          audio_url_en?: string | null
          audio_url_pl?: string | null
          author_name?: string | null
          canonical_url?: string | null
          category_id?: string | null
          content_en: string
          content_pl: string
          created_at?: string | null
          featured_image_alt_en?: string | null
          featured_image_alt_pl?: string | null
          featured_image_url?: string | null
          id?: string
          lead_en?: string | null
          lead_pl?: string | null
          meta_description_en?: string | null
          meta_description_pl?: string | null
          meta_title_en?: string | null
          meta_title_pl?: string | null
          published_at?: string | null
          slug: string
          status?: string | null
          title_en: string
          title_pl: string
          updated_at?: string | null
          view_count?: number | null
        }
        Update: {
          audio_url_en?: string | null
          audio_url_pl?: string | null
          author_name?: string | null
          canonical_url?: string | null
          category_id?: string | null
          content_en?: string
          content_pl?: string
          created_at?: string | null
          featured_image_alt_en?: string | null
          featured_image_alt_pl?: string | null
          featured_image_url?: string | null
          id?: string
          lead_en?: string | null
          lead_pl?: string | null
          meta_description_en?: string | null
          meta_description_pl?: string | null
          meta_title_en?: string | null
          meta_title_pl?: string | null
          published_at?: string | null
          slug?: string
          status?: string | null
          title_en?: string
          title_pl?: string
          updated_at?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_tags: {
        Row: {
          created_at: string | null
          id: string
          name_en: string
          name_pl: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name_en: string
          name_pl: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name_en?: string
          name_pl?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      memberships: {
        Row: {
          created_at: string
          id: string
          is_approved: boolean
          is_owner: boolean
          organization_id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_approved?: boolean
          is_owner?: boolean
          organization_id: string
          role?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_approved?: boolean
          is_owner?: boolean
          organization_id?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "memberships_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "memberships_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      online_leads: {
        Row: {
          company: string
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string
        }
        Insert: {
          company: string
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone: string
        }
        Update: {
          company?: string
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string
        }
        Relationships: []
      }
      organizations: {
        Row: {
          created_at: string
          full_description: string | null
          id: string
          industry: string
          logo_url: string | null
          membership_plan: string
          name: string
          short_description: string | null
          size: string
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          full_description?: string | null
          id?: string
          industry: string
          logo_url?: string | null
          membership_plan?: string
          name: string
          short_description?: string | null
          size: string
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          full_description?: string | null
          id?: string
          industry?: string
          logo_url?: string | null
          membership_plan?: string
          name?: string
          short_description?: string | null
          size?: string
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          allow_contact: boolean | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          email_notifications: boolean | null
          expertise: string[] | null
          first_name: string
          id: string
          is_expert: boolean | null
          last_name: string
          linkedin_url: string | null
          position: string | null
          updated_at: string
        }
        Insert: {
          allow_contact?: boolean | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email_notifications?: boolean | null
          expertise?: string[] | null
          first_name: string
          id: string
          is_expert?: boolean | null
          last_name: string
          linkedin_url?: string | null
          position?: string | null
          updated_at?: string
        }
        Update: {
          allow_contact?: boolean | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email_notifications?: boolean | null
          expertise?: string[] | null
          first_name?: string
          id?: string
          is_expert?: boolean | null
          last_name?: string
          linkedin_url?: string | null
          position?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      zalewski_leads: {
        Row: {
          contact_method: string
          created_at: string
          email: string
          id: string
          legal_areas: string[] | null
          message: string | null
          name: string
          phone: string
        }
        Insert: {
          contact_method: string
          created_at?: string
          email: string
          id?: string
          legal_areas?: string[] | null
          message?: string | null
          name: string
          phone: string
        }
        Update: {
          contact_method?: string
          created_at?: string
          email?: string
          id?: string
          legal_areas?: string[] | null
          message?: string | null
          name?: string
          phone?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_membership: {
        Args: { user_id: string; org_id: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
