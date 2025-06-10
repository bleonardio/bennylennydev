'use client';

import SiteLogo from '@/../public/site-logo.png'
import {Link} from "@/components/Link";
import {LinkStyle} from "@/components/Link/Link";
import classNames from "classnames";
import Image from "next/image";
import NextLink from 'next/link'
import {usePathname} from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/about', label: 'About ' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Projects' },
  ];

  const activeNavItemClasses = 'font-bold text-secondary-hover';

  return (
    <header>
      <div className="flex justify-between items-center bg-primary p-4">

        <NextLink href="/" title='bennylenny.dev' className="flex items-center">
          <Image src={SiteLogo} alt="bennylenny.dev" height={50} width={50} />
          <p className="font-bold text-secondary hover:text-secondary-hover">ennylenny.dev</p>
        </NextLink>


        <div className="flex justify-center items-center gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} text={item.label} classes={classNames({
              [activeNavItemClasses]: pathname === item.href
            })} style={LinkStyle.Secondary} />
          ))}
        </div>

      </div>
    </header>
  );
}

export default Header;