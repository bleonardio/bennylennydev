'use client';

import classNames from "classnames";
import {useState} from "react";
import {PageLayout, FortuneCookie } from "@/components";

export default function Home() {
  const cookieJar = 9;
  const [overallScore, setOverallScore] = useState<number>(0)
  const [resetClicked, setResetClicked] = useState<boolean>(false)
  const [hasStarted, setHasStarted] = useState<boolean>(false);

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
      return 'Lets gooooo';

    } else if (overallScore >= 6) {
      return 'You are on a roll';

    } else if (overallScore >= 3) {
      return 'You are somewhat favored';

    } else {
      return 'A calm fortune... for now';
    }
  }

  function onClick() {
    if (!hasStarted) {
      setHasStarted(true);
    }
  }

  const fortuneClassification = getFortuneClassification()

  return (
    <PageLayout>
      <p>score: {overallScore}</p>
      <p>{fortuneClassification}</p>

      {hasStarted && (
        <p
          className={classNames({ ['cursor-pointer']: !resetClicked })}
          onClick={() => {
            if (resetClicked) return;

            setResetClicked(!resetClicked)
          }}>
          {resetClicked ? 'its not that easy to start over' : 'reset?'}
        </p>
      )}

      <div className="grid grid-cols-3 gap-6 my-10">
        {Array.from({ length: cookieJar }).map((_, i) => (
          <FortuneCookie
            key={i}
            cb={(score) =>  setOverallScore(overallScore + score)}
            onClick={onClick}
          />
        ))}
      </div>
    </PageLayout>
  );
}
