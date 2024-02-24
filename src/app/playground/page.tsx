import { unstable_noStore as noStore } from "next/cache";

export default async function PlaygroundPage() {
  noStore();

  return (
    <div>
      <h1>Playground</h1>
    </div>
  );
}
