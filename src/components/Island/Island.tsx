import React from "react";

type IslandProps = {
  title: string;
  children: React.ReactNode;
}

const Island = ({ title, children }: IslandProps) => {
  return (
    <div className="rounded-md shadow-md bg-white p-4">
      <h1 className="text-xl font-bold mb-4 border-base border-b-2 py-4">
        {title}
      </h1>

      {children}
    </div>
  );
}

export default Island;