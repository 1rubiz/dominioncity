import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-800 text-white w-full px-12 py-24 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5">
      {/* <div className="md:col-span-4 text-center border-b border-white/5 pb-16 mb-16">
        <span className="font-newsreader text-6xl md:text-8xl block text-white italic">
          Chapel of Dominion
        </span>
      </div> */}
      <div className="md:col-span-4 bg-white flex items-center justify-center text-center border-b border-white/5 pb-16 mb-16">
        <img className='' src='/logo.png' alt='logo'/>
      </div>
      <div className="flex flex-col gap-6">
        <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-secondary font-bold">
          NAVIGATION
        </span>
        <ul className="space-y-4">
          <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="/media"
            >
              Sermons
            </a>
          </li>
          <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="/payments"
            >
              Giving
            </a>
          </li>
          {/* <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="#"
            >
              Locations
            </a>
          </li> */}
          {/* <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
          </li> */}
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-secondary font-bold">
          CONNECT
        </span>
        <ul className="space-y-4">
          {/* <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="#"
            >
              New Here?
            </a>
          </li>
          <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="#"
            >
              Small Groups
            </a>
          </li>
          <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="#"
            >
              Volunteer
            </a>
          </li> */}
          <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-secondary font-bold">
          RESOURCES
        </span>
        <ul className="space-y-4">
          {/* <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="#"
            >
              Kingdom Life Blog
            </a>
          </li>
          <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="#"
            >
              Mobile App
            </a>
          </li>
          <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="#"
            >
              Worship Music
            </a>
          </li>
          <li>
            <a
              className="text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-white transition-colors"
              href="#"
            >
              E-Store
            </a>
          </li> */}
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-secondary font-bold">
          FOLLOW
        </span>
        <div className="flex gap-6">
          <a
            className="text-white hover:text-secondary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">public</span>
          </a>
          <Link
            className="text-white hover:text-secondary transition-colors"
            to="/media"
          >
            <span className="material-symbols-outlined">play_circle</span>
          </Link>
          {/* <a
            className="text-white hover:text-secondary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">share</span>
          </a> */}
        </div>
        <p className="font-sans text-[10px] text-stone-500 mt-4 leading-relaxed">
          © 2026 Chapel of Dominion Ministry.
          <br />
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
