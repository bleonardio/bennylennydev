'use client';

import classNames from "classnames";
import { fortunes } from "./fortunes";
import { useState, useRef } from "react";
import { FortuneCookieIcon } from "@/components/Icons";

type FortuneCookieProps = {
  cb?: (score: number) => void;
  onClick?: () => void;
};

const FortuneCookie = ({ cb, onClick }: FortuneCookieProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const fortuneRef = useRef(fortunes[Math.floor(Math.random() * fortunes.length)]);
  const fortune = fortuneRef.current;

  function handleClick() {
    onClick?.();

    if (!isOpened && fortune) {
      cb?.(fortune.score);
    }

    setIsOpened(true);
  }

  return (
    <div className={classNames({['cursor-pointer']: !isOpened })} onClick={handleClick}>
      {isOpened ? (
        <div className="h-[222px] flex items-center justify-center">
          <p className="p-4 rotate-3 bg-white text-amber-800 w-full text-center">
            {fortune?.text}
          </p>
        </div>
      ) : (
        <FortuneCookieIcon classes="mx-auto" />
      )}
    </div>
  );
};

export default FortuneCookie;
