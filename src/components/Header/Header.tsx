'use client';

import { Link } from "@/components/Link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onMenuItemClick() {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <header>
      <div className="flex justify-between items-center bg-blue-900 p-4">

        <Link href="/" text="bennylenny.dev" onClick={onMenuItemClick} />

        <div className="cursor-pointer" onClick={() => setIsOpen((isOpen) => !isOpen)}>Expand</div>

      </div>
      {isOpen && (
        <div className="bg-amber-500 p-4 flex justify-center items-center gap-6">
          <Link href="/about" text="About" onClick={onMenuItemClick} />
          <Link href="/resume" text="Resume" onClick={onMenuItemClick} />
          <Link href="/projects" text="Projects" onClick={onMenuItemClick} />
          <Link href="/get-lost" text="Get Lost" onClick={onMenuItemClick} />
        </div>

      )}





    </header>
  );
}

export default Header;