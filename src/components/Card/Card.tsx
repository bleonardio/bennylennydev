'use client';

import classNames from "classnames";
import { useState } from 'react';

type CardProps = {
  front: string;
  back: string;
}

const Card = ({ front, back }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      onClick={toggleFlip}
      className="cursor-pointer p-4 bg-accent text-light rounded-md w-full text-center min-h-[140px] flex justify-center items-center"
    >
      <p className={classNames({
        ['font-bold']: !isFlipped,
      })}>
        {isFlipped ? back : front}
      </p>
    </div>
  );
};

export default Card;
