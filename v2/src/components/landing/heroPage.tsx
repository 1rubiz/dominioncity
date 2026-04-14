function HeroPage() {
  return (
    <>
      <header className="relative h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            alt="Cinematic church worship service with raised hands and stage lights"
            className="w-full h-full object-cover opacity-40"
            data-alt="Cinematic worship service with atmosphere lighting and raised hands"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVCBTBoDkwc4Gmsc-ioJZH2Gt-Y5PyIWf_AQ1lMkm5XP_cK9QjF_aGiCkBLjPAGm8UtY9PXQeU22j1B0Y5A51Xd5ZpqnxtcFXRfIbCCpj-HUum68E5gvCKhmfji5ijkVnJj_0uIGYrwcazrFBeRfa3Rw3ZCo090G0mz9afRxZaVMrD7iuYG7Rkk4KK4Y3dcub9lreZEFnLQkspCHElCGrQz-A7uvrp7XSzGKzE4TE5YeLQlQ5lvzOi_BxNWzmYYRchFjy6sEbd7u4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>
        <div className="relative pt-[30dvh] md:pt-12 z-10 max-w-6xl">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-white text-surface-variant mb-6 block font-bold">
            WELCOME TO
          </span>
          <h1 className="font-headline text-7xl md:text-[120px] leading-[0.9] text-white font-light tracking-tighter uppercase mb-8">
            Chapel of <br /> Dominion Ministries INC.
          </h1>
          <p className="font-headline italic text-2xl md:text-3xl text-white text-surface-variant font-extralight mb-12">
            Where Dominion Is Declared
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              className="bg-secondary text-white px-10 py-5 text-sm uppercase tracking-widest font-bold w-full md:w-auto hover:bg-on-secondary-container transition-all"
              href="#"
            >
              Join Us Every Sunday
            </a>
            <a
              className="border border-white text-white px-10 py-5 text-sm uppercase tracking-widest font-bold w-full md:w-auto hover:bg-white hover:text-black transition-all"
              href="#"
            >
              Watch Live
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-md py-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 font-sans text-[10px] md:text-xs tracking-[0.2em] text-white uppercase font-medium">
            <span>SUNDAYS 8AM</span>
            <span className="text-secondary">-</span>
            <span>11:30AM</span>
            {/* <span className="text-secondary">•</span> */}
            {/* <span>6PM</span> */}
            <span className="mx-4 text-white/30 hidden md:inline">|</span>
            <span>THURSDAYS 6:30AM</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroPage;
