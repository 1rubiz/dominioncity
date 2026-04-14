import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center px-4 md:px-12 py-6 bg-transparent dark:bg-black/90 backdrop-blur-xl z-50 transition-all duration-300">
        <div className="text-2xl font-newsreader italic text-stone-500">
          Chapel of Dominion
        </div>
        <div className="hidden md:flex items-center space-x-12">
          <Link
            className="text-stone-400 dark:text-stone-400 font-sans tracking-widest text-xs uppercase hover:text-amber-600 transition-colors duration-500"
            to="/v2"
          >
            About
          </Link>
          <Link
            className="text-stone-400 dark:text-stone-400 font-sans tracking-widest text-xs uppercase hover:text-amber-600 transition-colors duration-500"
            to="/media"
          >
            Media
          </Link>
          <Link
            className="text-stone-400 dark:text-stone-400 font-sans tracking-widest text-xs uppercase hover:text-amber-600 transition-colors duration-500"
            to="/payments"
          >
            Payments
          </Link>
          {/* <Link className="text-stone-600 dark:text-stone-400 font-sans tracking-widest text-xs uppercase hover:text-amber-600 transition-colors duration-500" to="/connect">Connect</Link> */}
        </div>
        <button className="bg-primary text-stone-500 px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-primary-container transition-all duration-300">
          Join Us
        </button>
      </nav>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 py-4 pb-safe md:hidden bg-[#fcf9f4]/80 dark:bg-[#000000]/80 backdrop-blur-xl border-t border-[#f0ede8] dark:border-[#171b28] shadow-[0_-4px_40px_rgba(0,0,0,0.04)] z-50">
        <Link to='/'>
          <div className="flex flex-col items-center justify-center text-[#1c1c19] dark:text-[#e5e2dd] opacity-50">
            <span className="material-symbols-outlined">home</span>
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[10px] uppercase tracking-widest mt-1">
              Home
            </span>
          </div>
        </Link>
        <Link to='payments'>
          <div className="flex flex-col items-center justify-center text-[#1c1c19] dark:text-[#e5e2dd] opacity-50">
            <span className="material-symbols-outlined">money</span>
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[10px] uppercase tracking-widest mt-1">
              Offerings
            </span>
          </div>
        </Link>
        <Link to='/media'>
          <div className="flex flex-col items-center justify-center text-[#755b00]">
            <span
                className="material-symbols-outlined"
                // style="font-variation-settings: 'FILL' 1;"
              >
                play_circle
            </span>
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[10px] uppercase tracking-widest mt-1">
              Media
            </span>
          </div>
        </Link>
        {/* <Link to=''>
          <div className="flex flex-col items-center justify-center text-[#1c1c19] dark:text-[#e5e2dd] opacity-50">
            <span className="material-symbols-outlined">person</span>
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[10px] uppercase tracking-widest mt-1">
              Profile
            </span>
          </div>
        </Link> */}
      </nav>
    </>
  );
}

export default Navbar;
