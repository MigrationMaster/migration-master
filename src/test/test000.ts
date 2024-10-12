import { Database } from "../lib/db/database.types";
import { createClient } from "@supabase/supabase-js";

export default async () => {
  const worker = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  console.log(worker);

  const user = await worker.from("users").insert({
    username: "rupam",
    email: "test@gmail.com",
  });
  console.log(user);

  // const migration_order = await worker.from("migrations_order").insert({
  //   user_id: 5,
  //   // order_id: 12,
  //   migration_title: "Test Migration 1",
  //   comment: "first test here",
  //   status: 1,
  // });
  // console.log(migration_order);

  // const ticket = await worker.from("tickets").insert({
  //   order_id: 6,
  //   user_id: 4,
  //   ticket_status: 2,
  //   ticket_communication: { "": "" },
  //   ticket_desc: "Desc",
  // });

  // console.log(ticket);
};
