'use client';

import { Link } from "@/components/Link";
import classNames from "classnames";
import {usePathname} from "next/navigation";

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
      <div className="flex justify-between items-center bg-amber-200 p-4">

        <Link href="/" text="bennylenny.dev" classes={classNames({ [activeNavItemClasses]: pathname === '/' })} />

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