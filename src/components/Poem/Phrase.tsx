
type PhraseProps = {
  lines: string[];
}

const Phrase = ({ lines } : PhraseProps) => {
  return (
    <div className="mb-4 text-black">
      {lines.map((line, i) => (
        line === "~" ? (
          <div key={`${line}-${i}`} className="h-4" />
        ) : (
          <p key={line}>{line}</p>
        )
      ))}
    </div>
  );
}

export default Phrase;