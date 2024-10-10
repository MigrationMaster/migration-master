import { Database } from "../lib/db/database.types";
import { createClient } from "@supabase/supabase-js";

export default async () => {
  const worker = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  console.log(worker);

  const op1 = await worker.from("migrations_order").insert({
    user_id: 0,
    order_id: 12,
    migration_title: "Test Migration 1",
    comment: "first test here",
    status: 1,
  });
  console.log(op1);

  const order = await worker.from("order_list").insert({
    order_id: 12,
    user_id: 0,
  });
  console.log(order);

  const op = await worker.from("files").insert({
    order_id: 12,
    files: "string",
  });
  console.log(op);
};
