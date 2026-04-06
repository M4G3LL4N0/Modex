import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (supabase) return supabase;

  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
      if (process.env.NODE_ENV === 'development') {
        console.warn("Supabase env vars missing — returning null client");
      }
      return null;
    }

    supabase = createClient(url, key, {
      db: {
        schema: 'public'
      }
    });
    return supabase;
  } catch (error) {
    console.error("Supabase initialization failed:", error);
    return null;
  }
}
