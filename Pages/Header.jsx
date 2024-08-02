import { navLinks } from "../src/data";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
    <nav className="nav-list">
          {navLinks.map((link) => {
            return (
              <div key={link.id}>
                <a href={link.href}>{link.name}</a>
              </div>
            );
          })}
      </nav>
    </header>
  );
};
export default Header;
