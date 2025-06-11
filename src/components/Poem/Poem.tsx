import React from "react";

import Phrase from "./Phrase";
import { TPoem } from "./data/types";

type TPoemProps = {
  poem: TPoem;
}

const Poem = ({ poem }: TPoemProps) => {
  return (
    <div className="p-4 bg-light rounded-md shadow-md">
      <h2 className="mb-2 font-bold">
        {poem.title}
      </h2>

      {poem.phrases.map((phrase) => (
        <Phrase
          key={phrase.id}
          lines={phrase.lines}
        />
      ))}
    </div>
  );
}

export default Poem;
