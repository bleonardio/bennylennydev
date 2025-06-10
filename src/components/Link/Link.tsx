import React from "react";
import classNames from "classnames";
import Link from 'next/link'

export enum LinkStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Light = 'light',
}

type LinkProps = {
  text?: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
  classes?: string;
  children?: React.ReactNode;
  style?: LinkStyle;
}

const AppLink = ({ text, href, isExternal = false, onClick, classes, children, style = LinkStyle.Primary }: LinkProps) => {
  const styleMap = {
    [LinkStyle.Primary]: 'cursor-pointer text-primary hover:text-primary-hover',
    [LinkStyle.Secondary]: 'cursor-pointer text-secondary hover:text-secondary-hover',
    [LinkStyle.Light]: 'cursor-pointer text-light hover:text-light-hover',
  }

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classNames(styleMap[style], classes)}
        target={'_blank'}
        rel="noopener noreferrer"
      >
        {text || children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames(styleMap[style], classes)} onClick={onClick}>
      {text || children}
    </Link>
  );
}

export default AppLink;