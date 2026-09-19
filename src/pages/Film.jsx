import SubPage from "../components/SubPage.jsx";

// Edit the items below. image: path in /public (e.g. "/film/one.jpg"), "" shows a placeholder.
// href: "" for no link, "/something" for a page on this site, "https://..." for an outside link.
const ITEMS = [
  { title: "Film One", text: "One or two sentences about it.", image: "", href: "" },
  { title: "Film Two", text: "One or two sentences about it.", image: "", href: "" },
  { title: "Film Three", text: "One or two sentences about it.", image: "", href: "" },
];

export default function Film() {
  return (
    <SubPage
      title="Film"
      intro="A sentence or two about this section."
      items={ITEMS}
    />
  );
}