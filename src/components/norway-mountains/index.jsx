export default function App() {
  return (
    <div className="relative w-full h-screen">
      <div className="bg-[url(/norway-mountains/robert-bye-HTzGwHaN7VA-unsplash.jpg)] bg-cover bg-center absolute inset-0 z-0"></div>
      <div className="absolute z-20 inset-0 flex flex-col px-16 py-8">
        <div className="flex justify-between items-center font-semibold">
          <div className="text-gray-800 flex text-center">
            AROUND
            <br />
            THE WORLD
          </div>
          <nav className="flex gap-12 text-gray-800 *:cursor-pointer *:hover:text-teal-600">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">TOURS</a>
            <a href="#">CONTACTS</a>
          </nav>
        </div>
        <main className="flex-1 flex flex-col justify-center gap-8">
          <div className="flex flex-col flex-1 justify-center gap-12">
            <div className="flex justify-center items-center">
              <div>
                <span className="text-gray-800 font-semibold">
                  AMAZING TOUR
                </span>
                <div className="tracking-widest">
                  <span className="text-8xl font-bold text-transparent bg-clip-text bg-[url(/norway-mountains/robert-bye-HTzGwHaN7VA-unsplash.jpg)] bg-cover bg-center bg-fixed">
                    NOR
                  </span>
                  <span className="text-8xl font-bold text-gray-800">WAY</span>
                </div>
              </div>
            </div>

            <div className="text-8xl font-bold text-transparent bg-clip-text bg-[url(/norway-mountains/robert-bye-HTzGwHaN7VA-unsplash.jpg)] bg-cover bg-center bg-fixed w-1/2 text-right">
              MOUNTAINS
            </div>
          </div>

          <div className="text-white flex flex-col gap-8 tracking-wider">
            <div className="font-medium italic max-w-sm">
              Travel leaves you speechless and then makes you a better
              storyteller.
            </div>
            <div className="font-semibold underline">
              LEARN ABOUT THE MOUNTAINS OF NORWAY
            </div>
          </div>
        </main>
      </div>

      <div className="bg-teal-200/30 backdrop-blur-md absolute inset-0 w-1/2 z-10 flex flex-col"></div>
    </div>
  );
}
