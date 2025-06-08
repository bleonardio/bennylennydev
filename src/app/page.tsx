'use client';

import {PageLayout} from "@/components";
import {FortuneCookie} from "@/components/FortuneCookie";
import {useState} from "react";

export default function Home() {
  const cookieJar = 9;
  const [overallScore, setOverallScore] = useState<number>(0)


  function getFortuneClassification() {
    if (overallScore <= -9) {
      return "Perhaps it's time to cut your losses";

    } else if (overallScore <= -6) {
      return 'Ouch, better luck next time';

    } else if (overallScore <= -3) {
      return 'Hang in there';

    } else if (overallScore === 0) {
      return 'We love a clean slate';

    } else if (overallScore >= 33) {
      return 'You absolute legend';

    } else if (overallScore >= 22) {
      return "We get it, you're good at this";

    } else if (overallScore >= 9) {
      return 'Okay slaayyy';

    } else if (overallScore >= 6) {
      return 'You are on a roll';

    } else if (overallScore >= 3) {
      return 'You are somewhat favored';

    } else {
      return 'A calm fortune... for now';
    }
  }

  const fortuneClassification = getFortuneClassification()

  return (
    <PageLayout>
      <p>score: {overallScore}</p>
      <p>{fortuneClassification}</p>

      <div className="grid grid-cols-3 gap-6 my-10">
        {Array.from({ length: cookieJar }).map((_, i) => (
          <FortuneCookie key={i}  cb={(score) =>  setOverallScore(overallScore + score)} />
        ))}
      </div>
    </PageLayout>
  );
}
