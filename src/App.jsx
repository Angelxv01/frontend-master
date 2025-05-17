import RecipePageMain from "./components/recipe-page-main";

const generator = [
  {
    id: "recipe-page",
    Component: RecipePageMain,
  },
];

export default function App() {
  // const [state, setState] = useState("");

  return (
    <div>
      <RecipePageMain />
      {/* <Manager state={state} setState={setState} /> */}
    </div>
  );
}

function Manager() {
  return generator.map((v) => <v.Component key={v.id} />);
}
