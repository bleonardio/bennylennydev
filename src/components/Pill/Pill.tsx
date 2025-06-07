
export enum PillStyle {
  Blue = 'blue',
  Red = 'red',
}

type PillProps = {
  text: string;
  style?: PillStyle;
  classes?: string;
}

const Pill = ({ text, style = PillStyle.Blue, classes }: PillProps) => {
  const pillStyles = {
    [PillStyle.Blue]: "bg-blue-500 text-white",
    [PillStyle.Red]: "bg-red-500 text-white",
  }

  return (
    <p className={`py-1 px-6 rounded-3xl w-fit font-bold ${pillStyles[style]} ${classes}`}>{text}</p>
  );
}

export default Pill;