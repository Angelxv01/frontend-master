import { SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/art-yakaterinburg/")({ component: App });

function App() {
  const today = new Date();

  return (
    <div className="font-[Inter]">
      <div className="h-screen">
        <div className="grid place-items-center h-screen bg-amber-50">
          <div className="flex w-full h-full py-4 bg-amber-50">
            <div className="[writing-mode:sideways-lr] [text-orientation:mixed] flex items-center justify-between p-8 pt-0 text-sm font-bold tracking-wider">
              <div>{today.toLocaleDateString()}</div>
              <Bars3Icon className="size-6 cursor-pointer" />
              <div className="uppercase">yakaterinburg, gogol 4</div>
            </div>
            <hr className="border h-full" />
            <div className="py-8 px-16 flex-1 flex flex-col relative z-0">
              <div class="absolute bottom-[50px] right-[50px] size-[500px] rounded-full bg-gradient-to-br from-yellow-300/80 via-orange-400/60 to-orange-500/40 shadow-xl z-0"></div>
              <div className="flex justify-between uppercase *:max-w-60 text-sm font-bold tracking-wider">
                <div>
                  the xx five
                  <br />
                  art festival
                </div>
                <div>what do you think about this festival?</div>
                <div>start at 11 am in yakaterinburg</div>
                <div>what is the entertainment program</div>
                <div className="flex gap-4">
                  <SpeakerWaveIcon className="size-6" />
                  <ArrowUpRightIcon className="size-6" />
                </div>
              </div>
              <div className="flex-1">
                {/* icon */}
                <img src="" alt="" />
              </div>
              <div className="flex items-end w-full">
                <div className="flex-1">
                  <div>Finally</div>
                  <div className="max-w-md text-4xl uppercase mt-12">
                    the beginning of winter in yakaterinburg will again be
                    marked by a bright event in the field of art.
                  </div>
                </div>
                <div className="flex-1 z-10">
                  <div className="max-w-lg mx-auto">
                    The 9th exhibition-sale of painting, graphics, sculpture and
                    decorativearts and crafts "ART yakaterinburg" and the III
                    exhibition of antiques and collectibles "Antiquary Expo"
                    will be held.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
