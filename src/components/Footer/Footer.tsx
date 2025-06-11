import { Github } from 'lucide-react';

import { Link } from "@/components";
import { LinkStyle } from "@/components/Link/Link";

const Footer = () => {
  return (
    <footer className="p-4 text-center text-sm text-light bg-secondary">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6">
        <Link
          href="https://github.com/bleonardio/bennylennydev"
          classes="flex items-center"
          style={LinkStyle.Light}
          isExternal
        >
          <Github size={24} />
          <p>Source code</p>
        </Link>

        <p className="text-center">
          © 2025 bennylenny.dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;