import Image from "next/image";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";
import LoginForm from "@/app/(login)/login/login-form";

export default async function Dashboard() {
  const session = await getServerAuthSession();

  if (session) {
    redirect("/profile");
  }

  return (
    <div className="container relative lg:min-h-[600px] xl:min-h-[800px]">
      <div className="absolute inset-0 -z-10 h-screen">
        <Image
          src="/images/hero.webp"
          alt="hero"
          fill={true}
          className="hidden h-full w-full object-cover [object-position:center] dark:block"
        />

        <Image
          src="/images/hero-white.webp"
          alt="hero"
          fill={true}
          className="block h-full w-full object-cover [object-position:center] dark:hidden"
        />
      </div>
      <LoginForm />
    </div>
  );
}
