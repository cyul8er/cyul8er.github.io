import "../simple.css";
import { PROJECTS } from "../projs.js";
import { LINKS } from "../links.js";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const projects = PROJECTS.filter((p) => p.cat === "misc");


export default function Misc() {
  return (
    <div className="page">
      <div className="layout">
        <main className="text">
          <h1 className="name">Miscellaneous Endeavours</h1>

          <section className="block">
            <br/>
            <p>
              Honestly, I just wanted somewhere definitive to put these (and this →)
            </p>
            <br/><br/>
            <p>
              Content soon I promise...
            </p>
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
          <img className="photo" src="/base.JPG" alt="portugal rock" />
          <figcaption className="caption">{"^^ Euro Summer '25 (Portugal)"}</figcaption>
        </figure>
      </div>
    </div>
  );
}