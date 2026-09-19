import { Link } from "react-router-dom";
import Art from "./Art.jsx";

// Image, title and text. If `href` is set the whole card is a link:
// "/something" stays on the site, "https://..." opens in a new tab.
export default function ProjectCard({ title, text, image, href }) {
  const body = (
    <>
      <Art src={image} alt={`${title} preview`} />
      <h2>{title}</h2>
      <p>{text}</p>
    </>
  );

  if (!href) return <article className="project">{body}</article>;

  return /^https?:/.test(href) ? (
    <a className="project" href={href} target="_blank" rel="noreferrer">
      {body}
    </a>
  ) : (
    <Link className="project" to={href}>
      {body}
    </Link>
  );
}