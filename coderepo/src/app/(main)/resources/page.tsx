import { DocsPageHeader } from "@/components/PageHeader";
import ResourcesContent from "@/components/ResourcesContent";

export default function ResourcesPage() {
  return (
    <main className="container py-6 lg:py-10">
      <DocsPageHeader
        heading="Curated Resources to Supercharge Your Web Development Journey"
        text="Unlocking a Treasure Trove of Tools, Tutorials, and References for Seamless Web Development Success"
      />
      <ResourcesContent />
    </main>
  );
}
