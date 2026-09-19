import SubPage from "../components/SubPage.jsx";

// Edit the items below. image: path in /public (e.g. "/misc/one.jpg"), "" shows a placeholder.
// href: "" for no link, "/something" for a page on this site, "https://..." for an outside link.
const ITEMS = [
  { title: "Miscellaneous One", text: "One or two sentences about it.", image: "", href: "" },
  { title: "Miscellaneous Two", text: "One or two sentences about it.", image: "", href: "" },
  { title: "Miscellaneous Three", text: "One or two sentences about it.", image: "", href: "" },
];

export default function Miscellaneous() {
  return (
    <SubPage
      title="Miscellaneous"
      intro="A sentence or two about this section."
      items={ITEMS}
    />
  );
}