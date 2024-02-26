import { type Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Handbooks",
    description:
      "Handbooks for learning and understanding different technologies.",
  };
}

export default async function HandbooksPage() {
  noStore();

  return (
    <div>
      <h1>Handbooks</h1>
    </div>
  );
}
