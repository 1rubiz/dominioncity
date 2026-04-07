function About() {
  return (
    <>
      <section className="bg-surface py-32 px-12 text-center border-y border-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-24 bg-secondary mx-auto mb-16 opacity-50"></div>
          <blockquote className="font-headline italic text-3xl md:text-5xl text-on-surface leading-tight font-light mb-12">
            "We believe that every soul is called to walk in victory. Here, the
            Word is not just heard, but manifested. Welcome to a household of
            dominion."
          </blockquote>
          <p className="font-sans text-xs uppercase tracking-widest font-bold text-on-surface-variant">
            — Pastor Dr, Everson Izekor.
          </p>
          <div className="h-px w-24 bg-secondary mx-auto mt-16 opacity-50"></div>
        </div>
      </section>
      <section className="py-12 px-12 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-8">
              local_fire_department
            </span>
            <h3 className="font-headline text-3xl mb-6 tracking-tight">
              The Presence
            </h3>
            <p className="font-sans text-sm leading-relaxed text-on-primary-container max-w-xs">
              Experience an atmosphere of authentic worship where the presence
              of God is our ultimate pursuit.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-8">
              menu_book
            </span>
            <h3 className="font-headline text-3xl mb-6 tracking-tight">
              The Word
            </h3>
            <h3 className="font-headline text-3xl mb-6 tracking-tight">
              The Word
            </h3>
            <p className="font-sans text-sm leading-relaxed text-on-primary-container max-w-xs">
              Uncompromising biblical teaching that empowers you to live a life
              of spiritual authority and purpose.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-8">
              groups
            </span>
            <h3 className="font-headline text-3xl mb-6 tracking-tight">
              The Family
            </h3>
            <p className="font-sans text-sm leading-relaxed text-on-primary-container max-w-xs">
              A community of believers committed to walking together in covenant
              love and mutual growth.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-surface-container-low px-12 py-6 md:px-24">
        <div className="flex justify-between items-end mb-20 border-b border-outline-variant pb-8">
          <h2 className="font-headline text-5xl tracking-tighter uppercase text-primary">
            Upcoming Events
          </h2>
          <a
            className="font-sans text-xs uppercase tracking-widest font-bold text-secondary hover:underline transition-all"
            href="#"
          >
            View All Events →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-outline-variant">
          <div className="p-12 border-r border-outline-variant group hover:bg-surface transition-colors duration-500 cursor-pointer">
            <span className="font-headline text-6xl text-secondary block mb-8 font-light">
              MAR 30
            </span>
            <h4 className="font-headline text-2xl mb-4 text-on-surface group-hover:text-secondary transition-colors">
              Dominion Men's Breakfast
            </h4>
            <p className="font-sans text-xs text-on-surface-variant uppercase tracking-widest">
              8:00 AM • Main Sanctuary
            </p>
          </div>
          <div className="p-12 border-r border-outline-variant group hover:bg-surface transition-colors duration-500 cursor-pointer">
            <span className="font-headline text-6xl text-secondary block mb-8 font-light">
              APR 05
            </span>
            <h4 className="font-headline text-2xl mb-4 text-on-surface group-hover:text-secondary transition-colors">
              Night of Miracles
            </h4>
            <p className="font-sans text-xs text-on-surface-variant uppercase tracking-widest">
              7:00 PM • Worship Center
            </p>
          </div>
          <div className="p-12 group hover:bg-surface transition-colors duration-500 cursor-pointer">
            <span className="font-headline text-6xl text-secondary block mb-8 font-light">
              APR 12
            </span>
            <h4 className="font-headline text-2xl mb-4 text-on-surface group-hover:text-secondary transition-colors">
              Worship Workshop
            </h4>
            <p className="font-sans text-xs text-on-surface-variant uppercase tracking-widest">
              10:00 AM • Room 302
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
