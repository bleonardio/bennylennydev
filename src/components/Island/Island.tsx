import React from "react";

type IslandProps = {
  title: string;
  children: React.ReactNode;
}

const Island = ({ title, children }: IslandProps) => {
  return (
    <div data-testid="island">
      <h1 className="text-xl font-bold mb-4 border-blue-400 border-b-2 py-4">{title}</h1>
      {children}
    </div>
  );
}

export default Island;