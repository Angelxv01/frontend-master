import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/recipe-page-main/")({
  component: App,
});

function App() {
  return (
    <main className="text-stone-700 font-[Outfit] md:bg-orange-100 md:py-16">
      <div className="md:max-w-3xl md:bg-white md:mx-auto md:rounded-xl md:overflow-hidden">
        <img src="/recipe-page-main/image-omelette.jpeg" alt="omlette" />
        <div className="m-8 flex flex-col">
          <h1 className="font-[Young_Serif] text-4xl">
            Simple Omelette Recipe
          </h1>
          <p className="my-4">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <section className="my-4 py-6 px-8 bg-pink-50">
            <h2 className="text-xl text-pink-900 font-semibold">
              Preparation time
            </h2>
            <ul className="list-disc mt-4 list-inside">
              <li>
                <span className="font-bold">Total</span>: Approximately 10
                minutes
              </li>
              <li>
                <span className="font-bold">Preparation</span>: 5 minutes
              </li>
              <li>
                <span className="font-bold">Cooking</span>: 5 minutes
              </li>
            </ul>
          </section>

          <section className="my-4">
            <h2 className="font-[Young_Serif] text-2xl text-amber-800">
              Ingredients
            </h2>
            <ul className="mt-4 list-inside flex flex-col gap-2">
              <li className="before:content-['•'] before:text-3xl before:mr-4 before:leading-0 relative flex items-center">
                2-3 large eggs
              </li>
              <li className="before:content-['•'] before:text-3xl before:mr-4 before:leading-0 relative flex items-center">
                Salt, to taste
              </li>
              <li className="before:content-['•'] before:text-3xl before:mr-4 before:leading-0 relative flex items-center">
                Pepper, to taste
              </li>
              <li className="before:content-['•'] before:text-3xl before:mr-4 before:leading-0 relative flex items-center">
                1 tablespoon of butter or oil
              </li>
              <li className="before:content-['•'] before:text-3xl before:mr-4 before:leading-0 relative flex items-center">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>

          <hr className="border-stone-200 border-1 my-4" />

          <section className="my-4">
            <h2 className="font-[Young_Serif] text-2xl text-amber-800">
              Instructions
            </h2>

            <ol className="list-decimal marker:text-amber-800 marker:font-bold list-inside flex flex-col gap-2 mt-4">
              <li>
                <span className="font-bold">Beat the eggs</span>: In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li>
                <span className="font-bold">Heat the pan</span>: Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li>
                <span className="font-bold">Cook the omelette</span>: Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li>
                <span className="font-bold">Add fillings (optional)</span>: When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li>
                <span className="font-bold">Fold and serve</span>: As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li>
                <span className="font-bold">Enjoy</span>: Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </section>

          <hr className="border-stone-200 border-1 my-4" />

          <section className="my-4">
            <h2 className="font-[Young_Serif] text-2xl text-amber-800">
              Nutrition
            </h2>
            <p className="mt-4">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="divide-y-2 divide-stone-200 *:grid *:grid-cols-2 *:px-6 *:py-4 mt-4">
              <div>
                <div>Calories</div>
                <div className="text-amber-800 font-bold">277kcal</div>
              </div>
              <div>
                <div>Carbs</div>
                <div className="text-amber-800 font-bold">0g</div>
              </div>
              <div>
                <div>Protein</div>
                <div className="text-amber-800 font-bold">20g</div>
              </div>
              <div>
                <div>Fat</div>
                <div className="text-amber-800 font-bold">22g</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
