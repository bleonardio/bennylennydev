
type PhraseProps = {
  lines: string[];
}

const Phrase = ({ lines } : PhraseProps) => {
  return (
    <div className="mb-4 text-black">
      {lines.map((line) => (
        line === "~" ? (
          <div key={line} className="h-4" />
        ) : (
          <p key={line}>{line}</p>
        )
      ))}
    </div>
  );
}

export default Phrase;