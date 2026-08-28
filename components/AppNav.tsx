import Image from "next/image";
import { History, Home, Sun } from "lucide-react";

export function AppNav() {
  return (
    <nav className="topbar" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Smart Recipe AI home">
        <span className="brand-mark image-mark">
          <Image src="/logo.png" width={40} height={40} alt="" priority />
        </span>
        <span>Smart Recipe AI</span>
      </a>

      <div className="nav-actions">
        <a className="nav-pill active" href="#generator">
          <Home size={17} />
          <span>Generator</span>
        </a>
        <a className="nav-pill" href="#history">
          <History size={17} />
          <span>History</span>
        </a>
        <button className="icon-button" type="button" aria-label="Theme">
          <Sun size={18} />
        </button>
      </div>
    </nav>
  );
}
