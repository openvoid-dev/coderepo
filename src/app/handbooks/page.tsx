import { unstable_noStore as noStore } from "next/cache";

export default async function HandbooksPage() {
  noStore();

  return (
    <div>
      <h1>Handbooks</h1>
    </div>
  );
}
