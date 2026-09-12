import { Link, PageLayout } from "@/components";

export default function NotFoundPage() {
  return (
    <PageLayout title="Not Found">
      <h2>That page does not exist :(</h2>

      <Link href="/" text="Let's get out of here" />

    </PageLayout>
  );
}