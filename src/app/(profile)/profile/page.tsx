import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="font-heading break-words text-xl font-semibold">
        {session.user.name}
      </h1>
    </div>
  );
}
