//  TODO - delete this file

import { setupDB } from "../db";

export const useDB = async () => {
  const client = setupDB();
  console.info(client);
  const sample = await client.from("users").insert({
    user_id: 0,
    username: "victor",
    email: "ops.glipse.tech",
  });
  return sample;
};
