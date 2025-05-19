import "./index.css";

export default function App() {
  return (
    <main className="font-[Figtree] bg-yellow-400 min-h-screen grid place-items-center">
      <section className="bg-white shadow-neutral-900/30 shadow-lg rounded-3xl overflow-hidden w-sm flex flex-col p-6 gap-4">
        <img
          src="/blog-preview-card-main/illustration-article.svg"
          alt="illustration article"
          className="rounded-xl"
        />
        <div>
          <span className="bg-yellow-400 inline self-start font-bold py-1 px-4">
            Learning
          </span>
          <p className="mt-2">Published 21 Dec 2023</p>
        </div>
        <h1 className="font-bold text-2xl hover:text-yellow-400 cursor-pointer">
          HTML & CSS foundations
        </h1>
        <p className="text-neutral-500 leading-5">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center gap-2">
          <img
            src="/blog-preview-card-main/image-avatar.webp"
            alt=""
            className="size-10"
          />
          <span className="font-bold">Greg Hooper</span>
        </div>
      </section>
    </main>
  );
}
