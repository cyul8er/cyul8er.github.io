import { useEffect, useState } from "react";
import colourways from "./colourways.js"; 
import "./temp.css";

// variables 
const NAME = "Claire Yu";
const TAGLINE = "\"Nerd out\"";

const DESCRIPTION = [
  "2nd year electrical engineering @ uwo",
  "Currently: studying for my lsat!",
  "This site is very much a work in progress so bear with me as I update :)"
];

const NAV = [
  { label: "Engineering", href: "/pages/Eng.jsx" },
  { label: "Film", href: "/pages/Film.jsx" },
  { label: "Miscellaneous", href: "/pages/Misc.jsx" },
];

const PROJECTS = [
  {
    title: "Mp3 Player",
    text: "From scratch, hardware and software",
    image: "/mp3_sch.png",
    href: "",
  },
  {
    title: "Multiple Choice",
    text: "Support DP with lighing and set up",
    image: "/mc_gaff.png",
    href: "",
  },
];

const PHOTO = { image: "/base.JPG", alt: "photo I took in portugal" };

const BUTTONS = [
  { label: "Email", href: "mailto:claireyu.cyu@gmail.com" },
  { label: "GitHub", href: "https://github.com/cyul8er" },
  { label: "Instagram", href: "https://instagram.com/selfportraitsofyu" },
  { label: "Resume", href: "/resume.pdf" },
];

//page logic 
const STORAGE_KEY = "temp-theme";

function Art({ src, alt, className = "" }) {
  return (
    <div className={`art ${className}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <span className="art-empty" aria-hidden="true" />
      )}
    </div>
  );
}

export default function Temp() {
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

  const theme = colourways.find((c) => c.id === themeId) ?? colourways[0];

  // page 
  return (
    <div className="temp" style={theme.colors}>
      <header className="top">
        <div className="intro">
          <h1 className="name">{NAME}</h1>
          <p className="tagline">{TAGLINE}</p>
          <div className="description">
            {DESCRIPTION.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <nav className="nav" aria-label="Other pages">
          {NAV.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="middle">
        <div className="projects">
          {PROJECTS.map((p) => {
            const body = (
              <>
                <Art src={p.image} alt={`${p.title} preview`} />
                <h2>{p.title}</h2>
                <p>{p.text}</p>
              </>
            );
            return p.href ? (
              <a className="project" key={p.title} href={p.href}>
                {body}
              </a>
            ) : (
              <article className="project" key={p.title}>
                {body}
              </article>
            );
          })}
        </div>

        <aside className="photo">
          <Art src={PHOTO.image} alt={PHOTO.alt} />
        </aside>
      </main>

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