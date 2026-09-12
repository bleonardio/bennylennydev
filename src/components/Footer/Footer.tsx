import { Code, CodeXml } from "lucide-react";

import { Link } from "@/components";
import { LinkStyle } from "@/components/Link/Link";

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="p-4 text-center text-sm text-light bg-accent">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 mb-4 md:mb-0">
        <Link
          href="https://github.com/bleonardio/bennylennydev"
          classes="flex items-center"
          style={LinkStyle.Light}
          isExternal
        >
          <div className="flex gap-2">
            <Code size={24} />

            <p>Source code</p>

            <CodeXml size={24} />
          </div>
        </Link>

        <p className="text-center">
          © 2025-{currentYear} www.bennylenny.dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
