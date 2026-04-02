import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

export function getSupabase() {
  if (supabase) return supabase;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // ⚠️ DO NOT crash at build time
  if (!url || !key) {
    console.warn("Supabase env vars missing — returning null client");
    return null;
  }

  supabase = createClient(url, key);
  return supabase;
}
