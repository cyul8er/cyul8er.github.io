import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { NAME } from "../site.js";

// Template for Engineering, Film and Miscellaneous.
// Your name (top left) links back to the home page.
export default function SubPage({ title, intro, items }) {
  return (
    <>
      <header className="top">
        <Link to="/" className="name name-small">
          {NAME}
        </Link>
        <Nav />
      </header>

      <main className="sub">
        <h1 className="page-title">{title}</h1>
        {intro && <p className="page-intro">{intro}</p>}
        <div className="grid">
          {items.map((item) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </div>
      </main>
    </>
  );
}