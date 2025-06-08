import {PageLayout} from "@/components";
import {FortuneCookie} from "@/components/FortuneCookie";

export default function Home() {
  const cookieJar = 9;

  return (
    <PageLayout>
      <div className="grid grid-cols-3 gap-6 my-10">
        {Array.from({ length: cookieJar }).map((_, i) => (
          <FortuneCookie key={i} />
        ))}
      </div>
    </PageLayout>
  );
}
