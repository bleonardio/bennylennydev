'use client';
import classNames from "classnames";
import Image from "next/image";
import NextLink from 'next/link'
import {usePathname} from "next/navigation";

import SiteLogo from '@/../public/site-logo.png'
import { Link } from "@/components/Link";
import {LinkStyle } from "@/components/Link/Link";


const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/about', label: 'About ' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Projects' },
  ];

  const activeNavItemClasses = 'font-bold text-secondary-hover';

  return (
    <header
      className="flex justify-between items-center bg-primary-dark p-4 sticky top-0 z-50">
      <NextLink
        href="/"
        title='bennylenny.dev'
        className="flex items-center"
      >
        <Image
          src={SiteLogo}
          alt="bennylenny.dev"
          height={50}
          width={50}
        />
        <p
          className="font-bold text-secondary hover:text-secondary-hover">
          ennylenny.dev
        </p>
      </NextLink>

      <div className="flex justify-center items-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            text={item.label}
            style={LinkStyle.Secondary}
            classes={classNames({
              [activeNavItemClasses]: pathname === item.href
            })}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;