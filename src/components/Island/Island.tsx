import React from "react";

type IslandProps = {
  title: string;
  children: React.ReactNode;
}

const Island = ({ title, children }: IslandProps) => {
  return (
    <div data-testid="island" className="rounded-md shadow-md bg-amber-100 p-4 text-black">
      <h1 className="text-xl font-bold mb-4 border-black border-b-2 py-4">{title}</h1>
      {children}
    </div>
  );
}

export default Island;