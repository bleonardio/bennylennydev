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

const AppLink = ({
  text,
  href,
  isExternal = false,
  onClick,
  classes,
  children,
  style = LinkStyle.Primary,
}: LinkProps) => {
  const sharedStyles = 'cursor-pointer font-bold'

  const styleMap = {
    [LinkStyle.Primary]: 'text-primary hover:text-primary-hover',
    [LinkStyle.Secondary]: 'text-secondary hover:text-secondary-hover',
    [LinkStyle.Light]: 'text-light hover:text-light-hover',
  }

  const linkClasses= classNames(sharedStyles, styleMap[style], classes);
  const linkBody = text || children;

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkBody}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={linkClasses}
      onClick={onClick}
    >
      {linkBody}
    </Link>
  );
}

export default AppLink;