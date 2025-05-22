import references from "./data";

export default function App() {
  return references.map((v) => (
    <span>
      Photo by <a href={v.userLink}>{v.userName}</a> on{" "}
      <a href={v.imageLink}>Unsplash</a>
    </span>
  ));
}
