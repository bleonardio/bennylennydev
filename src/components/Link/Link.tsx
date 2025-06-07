import Link from 'next/link'

type LinkProps = {
  text: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
}

const AppLink = ({ text, href, isExternal = false, onClick }: LinkProps) => {

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="cursor-pointer text-blue-500 hover:text-blue-600 underline"
        target={'_blank'}
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={href} className="cursor-pointer text-blue-500 hover:text-blue-600 underline">
      {text}
    </Link>
  );
}

export default AppLink;