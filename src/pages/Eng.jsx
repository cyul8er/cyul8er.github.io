import "../simple.css";
import { PROJECTS } from "../projs.js";
import { LINKS } from "../links.js";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const projects = PROJECTS.filter((p) => p.cat === "eng");


export default function Eng() {
  return (
    <div className="page">
      <div className="layout">
        <main className="text">
          <h1 className="name">Engineering</h1>

          <section className="block">
            <br/>
            <p>
              A collection of projects I deem "engineering" based (aka technical projects)
            </p>
            <p>
              This page is still a work in progress...
            </p>
          </section>

          <section className="block">
            <h2>Projects</h2>
            <ul className="projects">
              {projects.map((p) => (
                <li key={p.name}>
                  <a href={p.href}>{p.name}</a>
                  <span className="status" data-status={p.status}>
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>
          <Link className="back" to="/" aria-label="Back" title="Back">
            <IoIosArrowBack />
          </Link>
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
          <img className="photo" src="/base.JPG" alt="portugalRock" />
          <figcaption className="caption">{"^^placeholder for now"}</figcaption>
        </figure>
      </div>
    </div>
  );
}