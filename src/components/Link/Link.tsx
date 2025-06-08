import Link from 'next/link'

type LinkProps = {
  text: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
  classes?: string;
}

const AppLink = ({ text, href, isExternal = false, onClick, classes }: LinkProps) => {

  const className = `cursor-pointer text-blue-500 hover:text-blue-600 underline ${classes}`;

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={className}
        target={'_blank'}
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {text}
    </Link>
  );
}

export default AppLink;