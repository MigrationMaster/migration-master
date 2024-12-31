import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

const Dashboard = async () => {
  // to handle page access to authorized users
  const { userId }: { userId: string | null } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  return (
    <div>
      This is our dashboard {userId} <SignOutButton redirectUrl="/sign-in" />{" "}
    </div>
  );
};

export default Dashboard;
