function Ministry() {
  return (
    <>
      <section className="bg-surface overflow-hidden">
        {/*  */}
        <div className="flex flex-col md:flex-row min-h-150">
          <div className="w-full md:w-1/2 overflow-hidden">
            <img
              alt="Youth Ministry"
              className="w-full h-full object-cover"
              data-alt="Energetic youth gathered in a circle with vibrant expressions"
              src="https://animated-walrus-643.convex.cloud/api/storage/84b30d80-d881-4eb4-826b-704e99160b34"
            />
          </div>
          <div className="w-full md:w-1/2 p-16 md:p-32 flex flex-col justify-center bg-surface-container-low">
            <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-6">
              TRANSFORMING LIVES
            </span>
            <h2 className="font-headline text-5xl mb-8 tracking-tighter">
              Dominion Men
            </h2>
            <p className="font-sans text-on-surface-variant leading-relaxed mb-10 text-lg">
              Empowering the next generation to declare their identity in Christ
              and lead with spiritual authority in every sphere of life.
            </p>
            <a
              className="font-sans text-xs uppercase tracking-widest font-bold text-primary group"
              href="#"
            >
              Get Involved{' '}
              <span className="group-hover:translate-x-2 transition-transform inline-block ml-2">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse min-h-150">
          <div className="w-full md:w-1/2 overflow-hidden">
            <img
              alt="Global Missions"
              className="w-full h-full object-cover"
              data-alt="Hands holding a global map or cultural artifact showing mission work"
              src="https://animated-walrus-643.convex.cloud/api/storage/cefa8211-96c3-48a1-a1fc-f1e21654f103"
            />
          </div>
          <div className="w-full md:w-1/2 p-16 md:p-32 flex flex-col justify-center bg-surface">
            <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-6">
              REACHING NATIONS
            </span>
            <h2 className="font-headline text-5xl mb-8 tracking-tighter">
              Global Impact
            </h2>
            <p className="font-sans text-on-surface-variant leading-relaxed mb-10 text-lg">
              Taking the mandate of dominion across borders through strategic
              outreach, medical missions, and church planting.
            </p>
            <a
              className="font-sans text-xs uppercase tracking-widest font-bold text-primary group"
              href="#"
            >
              Get Involved{' '}
              <span className="group-hover:translate-x-2 transition-transform inline-block ml-2">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row min-h-150">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img
                alt="Youth Ministry"
                className="w-full h-full object-cover"
                data-alt="Energetic youth gathered in a circle with vibrant expressions"
                src="https://animated-walrus-643.convex.cloud/api/storage/8798d873-cd12-465a-8047-ce1ca3548b23"
              />
            </div>
            <div className="w-full md:w-1/2 p-16 md:p-32 flex flex-col justify-center bg-surface-container-low">
              <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-6">
                Raising the Future
              </span>
              <h2 className="font-headline text-5xl mb-8 tracking-tighter">
                Dominion Women
              </h2>
              <p className="font-sans text-on-surface-variant leading-relaxed mb-10 text-lg">
                Empowering the next generation of people to embrace their
                calling and lead with confidence in all areas of life.
              </p>
              <a
                className="font-sans text-xs uppercase tracking-widest font-bold text-primary group"
                href="#"
              >
                Get Involved{' '}
                <span className="group-hover:translate-x-2 transition-transform inline-block ml-2">
                  →
                </span>
              </a>
            </div>
          </div>
      </section>
      <section className="flex flex-col md:flex-row border-y border-outline-variant">
        <div className="w-full md:w-1/2 bg-surface p-20 md:p-32 text-center flex flex-col items-center justify-center">
          <span className="material-symbols-outlined text-secondary text-6xl mb-8">
            volunteer_activism
          </span>
          <h2 className="font-headline text-5xl mb-6 tracking-tighter text-primary">
            Give Online
          </h2>
          <p className="font-sans text-on-surface-variant mb-12 max-w-sm">
            Your generosity enables us to extend the boundaries of the Kingdom
            and bring hope to the broken-hearted.
          </p>
          <button className="bg-primary text-white px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-primary-container transition-all">
            Support the Vision
          </button>
        </div>
        <div className="w-full md:w-px bg-outline-variant"></div>
        <div className="w-full md:w-1/2 bg-slate-500 text-white p-20 md:p-32 text-center flex flex-col items-center justify-center">
          <span className="material-symbols-outlined text-secondary text-6xl mb-8">
            broadcast_on_personal
          </span>
          <h2 className="font-headline text-5xl mb-6 tracking-tighter">
            Watch Us Live
          </h2>
          <p className="font-sans text-on-primary-container mb-12 max-w-sm">
            Join our global online campus from anywhere in the world and
            experience the Word in real-time.
          </p>
          <button className="border border-white text-white px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all">
            Enter Sanctuary
          </button>
        </div>
      </section>
      <section className="bg-surface-container-low py-32 px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="material-symbols-outlined text-secondary mb-8">
            format_quote
          </span>
          <blockquote className="font-headline italic text-4xl text-on-surface leading-tight font-light mb-12">
            "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint."
          </blockquote>
          <p className="font-sans text-sm font-bold uppercase tracking-widest text-primary">
            — Isaiah 40:31
          </p>
          {/* <div className="flex justify-center gap-12 mt-16">
            <button className="text-outline hover:text-secondary transition-colors">
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <button className="text-outline hover:text-secondary transition-colors">
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Ministry;
