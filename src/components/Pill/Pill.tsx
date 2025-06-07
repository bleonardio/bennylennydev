
export enum PillStyle {
  Blue = 'blue',
  Red = 'red',
}

type PillProps = {
  text: string;
  style: PillStyle
}

const Pill = ({ text, style = PillStyle.Blue }: PillProps) => {
  const pillStyles = {
    [PillStyle.Blue]: "bg-blue-500 text-white",
    [PillStyle.Red]: "bg-red-500 text-white",
  }

  return (
    <p className={`py-1 px-6 rounded-3xl ${pillStyles[style]}`}>{text}</p>
  );
}

export default Pill;