'use client';

import {fortunes} from "./fortunes";
import {useState} from "react";
import {FortuneCookieIcon} from "@/components/Icons";

const FortuneCookie = () => {
  const [isOpened, setIsOpened] = useState(false);

  function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const fortune = fortunes.at(randomInt(0, fortunes.length - 1));

  return (
    <div className="cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
      <FortuneCookieIcon />
      {isOpened ? (<p className="text-white mt-2">{fortune}</p>) : <></>}
    </div>
  );
}

export default FortuneCookie;