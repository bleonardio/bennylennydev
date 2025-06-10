'use client';

import Image from "next/image";
import NextLink from 'next/link'
import classNames from "classnames";
import {usePathname} from "next/navigation";
import SiteLogo from '@/../public/site-logo.png'
import { Link } from "@/components/Link";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/about', label: 'About ' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Projects' },
  ];

  const activeNavItemClasses = 'font-bold text-blue-600';

  return (
    <header>
      <div className="flex justify-between items-center bg-primary p-4">

        <NextLink href="/" title='bennylenny.dev' className="flex items-center">
          <Image src={SiteLogo} alt="bennylenny.dev" height={50} width={50} />
          <p className="font-bold text-text-light">ennylenny.dev</p>
        </NextLink>


        <div className="flex justify-center items-center gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} text={item.label} classes={classNames({
              [activeNavItemClasses]: pathname === item.href
            })}  />
          ))}
        </div>

      </div>
    </header>
  );
}

export default Header;