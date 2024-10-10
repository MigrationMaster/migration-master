import { Database } from "../lib/db/database.types";
import { createClient } from "@supabase/supabase-js";

export default async () => {
  const worker = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  console.log(worker);
  const op1 = 

  const op = await worker.from("files").insert({
    order_id: 12,
    files: "string",
  });
  console.log(op);
};
