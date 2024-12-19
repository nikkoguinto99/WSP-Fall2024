export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      classes: {
        Row: {
          capacity: number
          date: string
          description: string
          id: number
          image: string | null
          name: string
          time: string
        }
        Insert: {
          capacity: number
          date: string
          description: string
          id?: number
          image?: string | null
          name: string
          time: string
        }
        Update: {
          capacity?: number
          date?: string
          description?: string
          id?: number
          image?: string | null
          name?: string
          time?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          comment: string
          id: number
          postid: number
          userid: number
        }
        Insert: {
          comment: string
          id?: number
          postid: number
          userid: number
        }
        Update: {
          comment?: string
          id?: number
          postid?: number
          userid?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_post"
            columns: ["postid"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      dailystats: {
        Row: {
          caloriesburned: number
          caloriesconsumed: number
          dailystatsid: number
          exercisecount: number
          exercisetimeminutes: number
          userid: number
        }
        Insert: {
          caloriesburned: number
          caloriesconsumed: number
          dailystatsid?: number
          exercisecount: number
          exercisetimeminutes: number
          userid: number
        }
        Update: {
          caloriesburned?: number
          caloriesconsumed?: number
          dailystatsid?: number
          exercisecount?: number
          exercisetimeminutes?: number
          userid?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["userid"]
            isOneToOne: false
            referencedRelation: "userstatistics"
            referencedColumns: ["userid"]
          },
        ]
      }
      posts: {
        Row: {
          calorieburn: number | null
          caption: string
          date: string | null
          duration: number | null
          id: number
          image: string | null
          likes: number | null
          type: string | null
          userid: number
        }
        Insert: {
          calorieburn?: number | null
          caption: string
          date?: string | null
          duration?: number | null
          id?: number
          image?: string | null
          likes?: number | null
          type?: string | null
          userid: number
        }
        Update: {
          calorieburn?: number | null
          caption?: string
          date?: string | null
          duration?: number | null
          id?: number
          image?: string | null
          likes?: number | null
          type?: string | null
          userid?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          bio: string | null
          caloriegoal: string | null
          dietarypreferences: string | null
          dob: string
          email: string
          firstname: string
          fitnessgoals: string | null
          height: string | null
          id: number
          isadmin: boolean
          lastname: string
          membershiptype: string
          password: string
          profilename: string
          profilepic: string | null
          sex: string
          weight: string | null
        }
        Insert: {
          bio?: string | null
          caloriegoal?: string | null
          dietarypreferences?: string | null
          dob: string
          email: string
          firstname: string
          fitnessgoals?: string | null
          height?: string | null
          id: number
          isadmin: boolean
          lastname: string
          membershiptype: string
          password: string
          profilename: string
          profilepic?: string | null
          sex: string
          weight?: string | null
        }
        Update: {
          bio?: string | null
          caloriegoal?: string | null
          dietarypreferences?: string | null
          dob?: string
          email?: string
          firstname?: string
          fitnessgoals?: string | null
          height?: string | null
          id?: number
          isadmin?: boolean
          lastname?: string
          membershiptype?: string
          password?: string
          profilename?: string
          profilepic?: string | null
          sex?: string
          weight?: string | null
        }
        Relationships: []
      }
      userstatistics: {
        Row: {
          totalexercisetimeminutes: number
          userid: number
        }
        Insert: {
          totalexercisetimeminutes: number
          userid: number
        }
        Update: {
          totalexercisetimeminutes?: number
          userid?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
