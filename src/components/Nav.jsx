import { NavLink } from "react-router-dom";
import { NAV } from "../site.js";

// Top right links. NavLink adds the "active" class to the current page.
export default function Nav() {
  return (
    <nav className="nav" aria-label="Pages">
      {NAV.map((item) => (
        <NavLink key={item.href} to={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}