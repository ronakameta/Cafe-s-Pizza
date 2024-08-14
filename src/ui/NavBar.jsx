import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-sky-700">
      <ul className="flex gap-4  text-sky-50">
        <li className="py-3 hover:bg-slate-500">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="p-3 hover:bg-slate-500">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className="p-3 hover:bg-slate-500 hidden">About</li>
      </ul>
    </nav>
  );
}

export default NavBar;
