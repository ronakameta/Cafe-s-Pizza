import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="flex bg-sky-700 justify-between items-center px-10 h-19 py-3 ">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
