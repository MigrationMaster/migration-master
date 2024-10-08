import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

class DB {
  private static INSTANCE: null | SupabaseClient = null;
  /**
   * Creates a singleton instance of DB client.
   * @return {SupabaseClient} DB client.
   */
  public static setupDB() {
    return (DB.INSTANCE =
      DB.INSTANCE ??
      createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL as string,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
      ));
  }

  /**
   * Destroys the DB client instance.
   */
  public static revokeDB() {
    DB.INSTANCE?.realtime.removeAllChannels();
    DB.INSTANCE = null;
  }
}

export const setupDB = DB.setupDB;
