import { redirect } from "next/navigation";
import { getCurrentUserServer } from "@/lib/server-auth";

export default async function DashboardPage() {
  const user = await getCurrentUserServer();

  if (!user) {
    redirect("/");
  }

  return (
    <div>
      Dashboard for {user.firstname}
    </div>
  );
}

