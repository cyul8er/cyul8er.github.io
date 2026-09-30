import "../simple.css";
import { FiInstagram, FiFileText, FiMail, FiGithub } from "react-icons/fi";
import { PROJECTS } from "../projs.js";

const LINKS = [
  { label: "Instagram", href: "https://instagram.com/yourhandle", icon: FiInstagram },
  { label: "Resume", href: "/resume.pdf", icon: FiFileText },
  { label: "Email", href: "mailto:you@example.com", icon: FiMail },
  { label: "GitHub", href: "https://github.com/yourusername", icon: FiGithub },
];

export default function Eng() {
  return (
    <div className="page">
      <div className="layout">
        <main className="text">
          <h1 className="name">Engineering</h1>

          <section className="block">
            <h2>About</h2>
            <p>
              I think cameras are cool → I think optics and photonics is interesting → Im
            </p>
            <p>Currently: studying for my lsat!</p>
          </section>

          <section className="block">
            <h2>Projects</h2>
            <ul className="projects">
              {PROJECTS.map((p) => (
                <li key={p.name}>
                  <a href={p.href}>{p.name}</a>
                  <span className="status" data-status={p.status}>
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <figure className="photo-wrap">
          <nav className="buttons" aria-label="Links">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                className="icon-link"
                href={href}
                aria-label={label}
                title={label}
              >
                <Icon />
              </a>
            ))}
          </nav>
          <img className="photo" src="/me.jpg" alt="Engineering" />
          <figcaption className="caption">{"Line one\nLine two"}</figcaption>
        </figure>
      </div>
    </div>
  );
}