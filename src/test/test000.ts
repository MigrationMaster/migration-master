import { setupDB } from "@/lib/db";
import { Database } from "../lib/db/database.types";
import { createClient } from "@supabase/supabase-js";
import { use } from "react";

export default async () => {
  const worker = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  console.log(worker);

  const user = await worker.from("users").insert({
    email: "test@gmail.com",
    username: "Victor",
    // user_id: 1,
  });
  console.log(user);

  const migration_order = await worker.from("migrations_order").insert({
    user_id: 1,
    // order_id: 12,
    migration_title: "Test Migration 1",
    comment: "first test here",
    status: 1,
  });
  console.log(migration_order);

  // const ticket = await worker.from("tickets").insert({
  //   order_id: 1,
  //   user_id: 1,
  //   ticket_status: 2,
  //   ticket_communication: { "": "" },
  //   ticket_desc: "Desc",
  //   ticket_id:
  // });
};
