import {PageLayout} from "@/components";
import {FortuneCookie} from "@/components/FortuneCookie";

export default function Home() {
  const cookieJar = 24;

  return (
    <PageLayout>
      <div className="grid grid-cols-4 gap-6 my-10">
        {Array.from({ length: cookieJar }).map((_, i) => (
          <FortuneCookie key={i} />
        ))}
      </div>
    </PageLayout>
  );
}
