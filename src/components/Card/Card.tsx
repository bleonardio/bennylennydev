import { useState } from "react";

type CardProps = {
  front: string;
  back: string;
}

const Card = ({ front, back }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // todo figure out how to do a transition on width when flipped
  // todo maybe back is tab type component
  return (
    <div data-testid="card" onClick={() => setIsFlipped(!isFlipped)} className="cursor-pointer p-4 w-fit border-blue-900 border-2 rounded-md">
      <p>{isFlipped ? back : front}</p>
    </div>
  );
}

export default Card;