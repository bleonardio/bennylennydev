
type LinkProps = {
  text: string;
  href: string;
  isExternal: boolean;
}

const Link = ({ text, href, isExternal }: LinkProps) => {
  return (
    <a
      href={href}
      className="cursor-pointer text-blue-500 hover:text-blue-600 underline"
      target={isExternal ? '_blank' : undefined}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export default Link;