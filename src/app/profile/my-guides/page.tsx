import { unstable_noStore as noStore } from "next/cache";

export default function MyGuidesProfilePage() {
  noStore();

  return (
    <div>
      <h1>My Guides</h1>
    </div>
  );
}
