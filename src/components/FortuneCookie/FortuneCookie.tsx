'use client';

import classNames from "classnames";
import { useState } from "react";
import { TFortune } from "./types";
import { FortuneCookieIcon } from "@/components/Icons";

type FortuneCookieProps = {
  fortune: TFortune;
  cb?: (score: number) => void;
  onClick?: () => void;
};

const FortuneCookie = ({ cb, onClick, fortune }: FortuneCookieProps) => {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    onClick?.();

    if (!isOpened && fortune) {
      cb?.(fortune.score);
    }

    setIsOpened(true);
  }

  return (
    <div
      className={classNames({['cursor-pointer']: !isOpened })}
      onClick={handleClick}
    >
      {isOpened ? (
        <div className="h-[222px] flex items-center justify-center">
          <p className="p-4 rotate-3 bg-light text-base w-full text-center">
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
