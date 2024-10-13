import { setupDB } from "../db_config";

export default async (file: File) => {
  setupDB()
    .storage.from("migration-master-storage")
    .upload(`/d/${file.name}`, file)
    .then((file) => console.log(file));
};
