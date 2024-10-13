import { setupDB } from "@/lib/db";

export default async () => {
  const worker = setupDB();

  return await worker.from("users").select();
};
