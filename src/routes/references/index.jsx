import { createFileRoute } from "@tanstack/react-router";
import references from "./data.ignore";

export const Route = createFileRoute("/references/")({
  component: App,
});

function App() {
  return references.map((v) => (
    <span>
      Photo by <a href={v.userLink}>{v.userName}</a> on{" "}
      <a href={v.imageLink}>Unsplash</a>
    </span>
  ));
}
