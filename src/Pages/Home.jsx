import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative bg-black overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/30 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-900/10 text-amber-400 text-sm font-mono tracking-[0.2em] uppercase backdrop-blur-sm">
          The Future is Here
        </div>
        <div className="relative mb-6">
          <h1 className="text-[20vw] md:text-[15rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-800 leading-none tracking-tighter select-none drop-shadow-2xl">
            2026
          </h1>

          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-8xl font-serif text-amber-400 italic whitespace-nowrap mix-blend-overlay opacity-80">
            Happy New Year
          </h2>
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-8xl font-serif text-amber-400 italic whitespace-nowrap z-20">
            Happy New Year
          </h2>
        </div>
        <p className="text-slate-400 max-w-xl mx-auto text-lg md:text-xl mb-12 font-light tracking-wide">
          Start the year with clarity and purpose. Join thousands of creators
          building the future with BardUI.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to={'/features'}>
          <button className="group px-8 py-4 bg-amber-500 text-black font-bold text-lg rounded-full hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <span className="flex items-center gap-2">
              Get out Features
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
          </button>
          </Link>

          <Link to={'/product'}>
          <button className="px-8 py-4 bg-transparent text-white font-medium text-lg rounded-full border border-white/20 hover:bg-white/5 transition-colors">
            View Product
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;
