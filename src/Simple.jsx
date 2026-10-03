import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import colourways from "./colourways.js"; 
import "./simple.css";
import { PROJECTS } from "./projs.js";
import { LINKS } from "./links.js"

const featured = PROJECTS.filter((p) => p.home).slice(0, 3);

export default function Simple() {
  return (
    <div className="page">

      <div className="layout">
        <main className="text">
          <h1 className="name">Claire Yu</h1>
          <p>2nd year electrical engineering @ uwo</p>

          <section className="block">
            <h2>About</h2>
            <p>
              I think cameras are cool → I think optics and photonics are interesting
            </p>
            <p>Currently: studying for my lsat!</p>
          </section>

          <section className="block">
            <h2>Projects</h2>
            <ul className="projects">
                {featured.map((p) => (
                    <li key={p.name}>
                    <a href={p.href}>{p.name}</a>
                    <span className="status" data-status={p.status}>{p.status}</span>
                    </li>
                ))}
            </ul>
          </section>

          <section className="block">
            <h2>More -- work in progress</h2>
            <ul className="projects">
                <li><Link to="Engineering">Engineering</Link></li>
                <li><Link to="Misc">Misc</Link></li>
            </ul>
          </section>
        </main>

        <figure className="photo-wrap">
            <nav className="buttons" aria-label="Links">
                {LINKS.map(({ label, href, icon: Icon }) => (
                    <a key={label} className="icon-link" href={href} aria-label={label} title={label}>
                    <Icon />
                    </a>
                ))}  
            </nav>
            <img className="photo" src="shadow.jpg" alt="portugal rock" />
            <figcaption className="caption">
            {"See you later\nC YU later\ncyulater\ncyul8er"}
            </figcaption>
        </figure>
        
      </div>
    </div>
  );
}