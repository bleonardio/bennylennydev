import { Link } from "@/components/Link";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center bg-amber-200 p-4">

        <Link href="/" text="bennylenny.dev" classes="font-bold" />

        <div className="flex justify-center items-center gap-2">
          <Link href="/about" text="About"  />
          <Link href="/resume" text="Resume" />
          <Link href="/projects" text="Projects" />
        </div>

      </div>
    </header>
  );
}

export default Header;