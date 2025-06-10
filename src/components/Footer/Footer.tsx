import { Link } from "@/components";
import {LinkStyle} from "@/components/Link/Link";
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="p-4 text-center text-sm text-light bg-secondary">
      <div className="flex items-center">
        <Link href="https://github.com/bleonardio/bennylennydev" classes="flex items-center" isExternal style={LinkStyle.Light}>
          <Github size={32} />
          <p>Source code</p>
        </Link>


      </div>
      <p className="text-center my-4">
        © 2025 bennylenny.dev. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;