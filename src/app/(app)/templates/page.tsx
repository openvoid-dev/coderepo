import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeroImage,
} from "@/components/page-header";

export default async function TemplatesPage() {
  return (
    <main className="container relative min-h-screen pb-8 lg:pb-20">
      <PageHeroImage />
      <PageHeader>
        <PageHeaderHeading>Templates coming soon!</PageHeaderHeading>
      </PageHeader>
    </main>
  );
}
