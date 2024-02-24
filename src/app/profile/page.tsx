import { unstable_noStore as noStore } from "next/cache";

export default async function ProfilePage() {
  noStore();
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
}
