'use client';

type CardProps = {
  front: string;
  back: string;
}

const Card = ({ front, back }: CardProps) => {
  return (
    <div
      data-testid="card"
      className="group cursor-pointer p-4 bg-amber-200 text-black rounded-md w-full text-center min-h-[140px] flex justify-center items-center"
    >
      <p className="block group-hover:hidden">{front}</p>
      <p className="hidden group-hover:block">{back}</p>
    </div>
  );
}

export default Card;