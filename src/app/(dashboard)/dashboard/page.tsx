import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | Migration Master",
  description:
    "Dashboard of Migration Master utility where you can easily migrate between your Shopify and WordPress sites",
};

const Dashboard = async () => {
  // to handle page access to authorized users
  const { userId }: { userId: string | null } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  return <div className="">This is our dashboard {userId}</div>;
};

export default Dashboard;
