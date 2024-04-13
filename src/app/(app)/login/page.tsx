import Image from "next/image";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";
import LoginForm from "@/app/(app)/login/login-form";

export default async function Dashboard() {
  const session = await getServerAuthSession();

  if (session) {
    redirect("/profile");
  }

  return (
    <div className="container lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <LoginForm />
      <div className="hidden lg:block">
        <Image
          src="/images/hero.webp"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
