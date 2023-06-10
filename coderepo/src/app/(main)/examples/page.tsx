import ExamplesContent from "@/components/ExamplesContent";
import { DocsPageHeader } from "@/components/PageHeader";

export default function ExamplesPage() {
  return (
    <main className="container  py-6 lg:py-10">
      <DocsPageHeader
        heading="Inspiring Example Projects"
        text=" These example projects are works in progress, showcasing ongoing
            development and iterative refinement as they evolve to achieve
            greater functionality, aesthetics, and user experience."
      />
      <ExamplesContent />
    </main>
  );
}
