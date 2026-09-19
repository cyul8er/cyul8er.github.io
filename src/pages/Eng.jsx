import SubPage from "../components/SubPage.jsx";

// Edit the items below. image: path in /public (e.g. "/engineering/one.jpg"), "" shows a placeholder.
// href: "" for no link, "/something" for a page on this site, "https://..." for an outside link.
const ITEMS = [
  { title: "Engineering One", text: "One or two sentences about it.", image: "", href: "" },
  { title: "Engineering Two", text: "One or two sentences about it.", image: "", href: "" },
  { title: "Engineering Three", text: "One or two sentences about it.", image: "", href: "" },
];

export default function Engineering() {
  return (
    <SubPage
      title="Engineering"
      intro="A sentence or two about this section."
      items={ITEMS}
    />
  );
}