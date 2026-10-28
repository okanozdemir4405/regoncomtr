// ==============================================================================
// REGON TEKNOLOJİ — SUPABASE VERİTABANI TİPLERİ (PostgreSQL Schema v1)
// ==============================================================================

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type FeedbackType = 'bug' | 'feature_request' | 'general' | 'question'
export type FeedbackPriority = 'low' | 'medium' | 'high' | 'critical'
export type FeedbackStatus = 'received' | 'reviewing' | 'planned' | 'in_progress' | 'completed' | 'rejected'
export type AuthorType = 'tenant' | 'admin'
export type AdminRole = 'superadmin' | 'admin' | 'support'
export type ProjectStatus = 'active' | 'beta' | 'archived'

export interface Database {
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string
          name: string
          contact_name: string | null
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          contact_name?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          contact_name?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
      }

      projects: {
        Row: {
          id: string
          slug: string
          name: string
          description: string | null
          status: ProjectStatus
          created_at: string
        }
        Insert: {
          id?: string
          slug: string
          name: string
          description?: string | null
          status?: ProjectStatus
          created_at?: string
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          description?: string | null
          status?: ProjectStatus
          created_at?: string
        }
      }

      activation_codes: {
        Row: {
          id: string
          tenant_id: string
          project_id: string
          code_hash: string
          is_active: boolean
          expires_at: string | null
          last_login_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          project_id: string
          code_hash: string
          is_active?: boolean
          expires_at?: string | null
          last_login_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          project_id?: string
          code_hash?: string
          is_active?: boolean
          expires_at?: string | null
          last_login_at?: string | null
          created_at?: string
        }
      }

      feedbacks: {
        Row: {
          id: string
          tenant_id: string
          project_id: string
          type: FeedbackType
          title: string
          description: string
          priority: FeedbackPriority
          status: FeedbackStatus
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          project_id: string
          type: FeedbackType
          title: string
          description: string
          priority?: FeedbackPriority
          status?: FeedbackStatus
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          project_id?: string
          type?: FeedbackType
          title?: string
          description?: string
          priority?: FeedbackPriority
          status?: FeedbackStatus
          created_at?: string
          updated_at?: string
        }
      }

      feedback_comments: {
        Row: {
          id: string
          feedback_id: string
          author_type: AuthorType
          author_name: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          feedback_id: string
          author_type: AuthorType
          author_name: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          feedback_id?: string
          author_type?: AuthorType
          author_name?: string
          message?: string
          created_at?: string
        }
      }

      feedback_attachments: {
        Row: {
          id: string
          feedback_id: string
          file_url: string
          file_name: string
          file_size: number | null
          created_at: string
        }
        Insert: {
          id?: string
          feedback_id: string
          file_url: string
          file_name: string
          file_size?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          feedback_id?: string
          file_url?: string
          file_name?: string
          file_size?: number | null
          created_at?: string
        }
      }

      status_histories: {
        Row: {
          id: string
          feedback_id: string
          old_status: string | null
          new_status: string
          changed_by: string
          created_at: string
        }
        Insert: {
          id?: string
          feedback_id: string
          old_status?: string | null
          new_status: string
          changed_by: string
          created_at?: string
        }
        Update: {
          id?: string
          feedback_id?: string
          old_status?: string | null
          new_status?: string
          changed_by?: string
          created_at?: string
        }
      }

      api_keys: {
        Row: {
          id: string
          project_id: string
          key_hash: string
          name: string
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          key_hash: string
          name: string
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          key_hash?: string
          name?: string
          is_active?: boolean
          created_at?: string
        }
      }

      admin_users: {
        Row: {
          id: string
          email: string
          full_name: string
          role: AdminRole
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          role?: AdminRole
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          role?: AdminRole
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      feedback_type: FeedbackType
      feedback_priority: FeedbackPriority
      feedback_status: FeedbackStatus
      author_type: AuthorType
      admin_role: AdminRole
      project_status: ProjectStatus
    }
  }
}
