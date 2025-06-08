import React from "react";

import Phrase from "./Phrase";
import {TPoem} from "./data/types";

type TPoemProps = {
  poem: TPoem;
}

const Poem = ({ poem }: TPoemProps) => {
  return (
    <div data-testid="poem" className="p-4 bg-amber-100 rounded-md shadow-sm w-fit">
      <h2 className="mb-2 text-black font-bold">{poem.title}</h2>

      {poem.phrases.map((phrase) => (
        <Phrase key={phrase.id} lines={phrase.lines} />
      ))}
    </div>
  );
}

export default Poem;
