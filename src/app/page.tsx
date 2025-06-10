'use client';

import classNames from "classnames";
import {useState} from "react";
import ConfettiExplosion from 'react-confetti-explosion';

import {PageLayout, FortuneCookie } from "@/components";

export default function Home() {
  const cookiesAvailable = 9;

  const [overallScore, setOverallScore] = useState<number>(0)
  const [cookiesCracked, setCookiesCracked] = useState<number>(0)
  const [resetClicked, setResetClicked] = useState<boolean>(false)
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  function getFortuneClassification() {
    if (overallScore <= -9) {
      return "Perhaps it's time to cut your losses";

    } else if (overallScore <= -6) {
      return 'Ouch, better luck next time';

    } else if (overallScore < 0) {
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
  const isGameFinished = cookiesCracked === cookiesAvailable;

  function Scoreboard() {
    return (
      <div className="bg-amber-200 border-red-700 border-4  rounded-md text-black p-4 mx-auto sticky top-0 z-10">
        <p>Score: {overallScore}</p>
        <p>{fortuneClassification}</p>

        {(hasStarted && !isGameFinished) && (
          <div
            className={classNames(
              {['cursor-pointer']: !resetClicked },
              'border-t-2 border-red-700 mt-4 pt-2',
            )}
          >
            <p
              onClick={() => {
                if (resetClicked) return;
                setResetClicked(!resetClicked)
              }}>
              {resetClicked ? 'its not that easy to start over' : 'reset?'}
            </p>
          </div>
        )}
      </div>
    );
  }

  function ConfettiBlock() {
    return (
      <>
        {isGameFinished && (
          <div className="grid grid-cols-3">
            <ConfettiExplosion particleCount={200} />
            <ConfettiExplosion particleCount={200} />
            <ConfettiExplosion particleCount={200} />
          </div>
        )}</>
    );
  }

  return (
    <PageLayout>

      <ConfettiBlock />

      <Scoreboard />

      <ConfettiBlock />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {Array.from({ length: cookiesAvailable }).map((_, i) => (
          <FortuneCookie
            key={i}
            cb={(score) => {
              setOverallScore(overallScore + score);
              setCookiesCracked(cookiesCracked + 1);
            }}
            onClick={onClick}
          />
        ))}
      </div>
    </PageLayout>
  );
}
