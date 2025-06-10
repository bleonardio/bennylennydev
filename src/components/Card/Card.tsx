'use client';

import { useState } from 'react';

type CardProps = {
  front: string;
  back: string;
}

const Card = ({ front, back }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div
      data-testid="card"
      onClick={toggleFlip}
      className="group cursor-pointer p-4 bg-accent text-light rounded-md w-full text-center min-h-[140px] flex justify-center items-center"
    >
      {/* Desktop flips on hover, mobile flips on click */}
      <p className={`${flipped ? 'hidden' : 'block'} group-hover:hidden font-bold`}>
        {front}
      </p>
      <p className={`${flipped ? 'block' : 'hidden'} group-hover:block`}>
        {back}
      </p>
    </div>
  );
};

export default Card;
