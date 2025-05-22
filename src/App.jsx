import BlogPreviewCardMain from "./components/blog-preview-card-main";
import NorwayMountains from "./components/norway-mountains";
import RecipePageMain from "./components/recipe-page-main";
import SocialLinksProfileMain from "./components/social-links-profile-main";

const generator = [
  {
    id: "recipe-page-main",
    Component: RecipePageMain,
  },
  {
    id: "social-links-profile-main",
    Component: SocialLinksProfileMain,
  },
  {
    id: "blog-preview-card-main",
    Component: BlogPreviewCardMain,
  },
];

export default function App() {
  // const [state, setState] = useState("");

  return (
    <div>
      {/* <RecipePageMain /> */}
      {/* <SocialLinksProfileMain /> */}
      {/* <BlogPreviewCardMain /> */}
      <NorwayMountains />
      {/* <Manager state={state} setState={setState} /> */}
    </div>
  );
}

function Manager() {
  return generator.map((v) => <v.Component key={v.id} />);
}
