
export enum PillStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Accent = 'accent',
}

type PillProps = {
  text: string;
  style?: PillStyle;
  classes?: string;
}

const Pill = ({ text, style = PillStyle.Primary, classes }: PillProps) => {
  const pillStyles = {
    [PillStyle.Primary]: "bg-primary text-white",
    [PillStyle.Secondary]: "bg-secondary text-white",
    [PillStyle.Accent]: "bg-secondary text-white",
  }

  return (
    <p className={`py-1 px-6 rounded-3xl w-fit font-bold ${pillStyles[style]} ${classes}`}>
      {text}
    </p>
  );
}

export default Pill;