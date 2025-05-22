import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/social-links-profile-main/")({
  component: App,
});

function App() {
  return (
    <main className="bg-zinc-900 text-white font-[Inter] min-h-screen grid place-items-center">
      <section className="bg-zinc-800 w-sm flex flex-col items-center py-8 px-6 rounded-lg gap-6">
        <img
          src="/social-links-profile-main/avatar-jessica.jpeg"
          alt=""
          className="rounded-full w-24"
        />

        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-wide">Jessica Randall</h2>
          <span className="text-lime-400 text-sm font-bold">
            London, United Kingdom
          </span>
        </div>

        <span className="text-sm text-zinc-100">
          "Front-end developer and avid reader."
        </span>

        <div className="*:block *:rounded-lg *:bg-zinc-700 *:w-full *:py-3 *:font-semibold *:text-sm *:cursor-pointer *:hover:bg-lime-400 *:hover:text-zinc-800 transition-colors w-full flex flex-col gap-4">
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </section>
    </main>
  );
}
