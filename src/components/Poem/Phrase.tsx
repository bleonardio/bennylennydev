
type PhraseProps = {
  lines: string[];
}

const Phrase = ({ lines } : PhraseProps) => {
  return (
    <div className="mb-4 text-black">
      {lines.map((line) => (<p key={line}>{line}</p>))}
    </div>
  );
}

export default Phrase;