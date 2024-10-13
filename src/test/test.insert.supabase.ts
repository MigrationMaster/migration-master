import { setupDB } from "@/lib/db";

export default async () => {
  const worker = setupDB();
  console.log(worker);

  const user = await worker.from("users").insert({
    username: "rupam",
    email: "test@gmail.com",
  });
  console.log(user);

  // const migration_order = await worker.from("migrations_order").insert({
  //   user_id: "d3235eef635e46c785c173302d79956a",
  //   // user_id: 12,
  //   migration_title: "hex",
  //   comment: "dont know what to do",
  //   status: 1,
  // });
  // console.log(migration_order);

  const ticket = await worker.from("tickets").insert({
    order_id: "9778ed59-4849-4671-8a8d-065c3c0a2eab",
    user_id: "d3235eef635e46c785c173302d79956a",
    ticket_status: 2,
    ticket_communication: { "": "" },
    ticket_desc: "Desc",
  });
  console.log(ticket);
};
