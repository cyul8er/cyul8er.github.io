import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import colourways from "./colourways.js"; // adjust the path if yours lives elsewhere
import { BUTTONS } from "./site.js";
import "./temp.css";

const STORAGE_KEY = "temp-theme";

/*
  Wraps every page. Because the colour choice lives here (and this component
  stays mounted while you move between pages), the theme carries across all
  of them, and the fade still plays when you switch.
*/
export default function TempLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [themeId, setThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return colourways.some((c) => c.id === saved) ? saved : colourways[0].id;
    } catch {
      return colourways[0].id;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, themeId);
    } catch {
      /* storage unavailable: ignore */
    }
  }, [themeId]);

  // start each page at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const theme = colourways.find((c) => c.id === themeId) ?? colourways[0];

  return (
    <div className={`temp${isHome ? " is-home" : ""}`} style={theme.colors}>
      <Outlet />

      <footer className="bottom">
        <div className="buttons">
          {BUTTONS.map((b) => (
            <a key={b.label} className="button" href={b.href}>
              {b.label}
            </a>
          ))}
        </div>

        <div className="themes" role="group" aria-label="Colour theme">
          {colourways.map((c) => (
            <button
              key={c.id}
              type="button"
              className="swatch"
              style={{
                "--sw-bg": c.colors["--color-bg"],
                "--sw-fg": c.colors["--color-fg"],
                "--sw-accent": c.colors["--color-accent"],
              }}
              aria-label={c.name}
              aria-pressed={c.id === theme.id}
              title={c.name}
              onClick={() => setThemeId(c.id)}
            />
          ))}
        </div>
      </footer>
    </div>
  );
}