function Location() {
  return (
    <section className="flex flex-col md:flex-row bg-surface border-t border-outline-variant">
      <div className="w-full md:w-3/5 h-[600px] relative">
        <div className="absolute inset-0 grayscale opacity-40">
          <img
            alt="Location Map"
            className="w-full h-full object-cover"
            data-alt="A clean, minimalist high-contrast aerial city map view"
            data-location="London, UK"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzG7IHfK07upZgI54RUv7FxZMT3sBaFuSU1jkNm5rsVlV_z37B7d2OK6edtJXq3EcCr7Eo5CyfSozJfu__3TX8TC9shMTUlet-I_Xuh25omCoA1xxCRWU0NhWipftqWdEFUXBxZNVBF9VnSPwn_ehBAcFHd0IjzyzcvongukWC2O1_G8pscQ0tsm7_MLeVx-ygIQ_9ocBnThyocGnBoJ9xwsv-ntBXWEjnkvzP13Jamfk831AJjgILuz_B5m5fsxzgcq-QIQBOWZM"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-20 bg-gradient-to-t from-surface via-transparent to-transparent">
          <h2 className="font-headline text-4xl mb-6 text-primary">
            Our Sanctuary
          </h2>
          <address className="not-italic font-sans text-on-surface-variant leading-relaxed text-lg">
            48, OKUNGBOWA STREET, OFF SILUKO ROAD,
            <br /> OGIDA QUARTERS BENIN CITY.
          </address>
          <button className="mt-8 font-sans text-xs uppercase tracking-widest font-bold text-secondary border-b border-secondary w-max">
            Get Directions
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/5 p-20 md:p-32 bg-surface-container-highest">
        <h2 className="font-headline text-4xl mb-12 text-primary">
          Service Schedule
        </h2>
        <div className="space-y-10">
          <div className="border-b border-outline pb-6">
            <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-secondary mb-2">
              SUNDAY MORNING
            </p>
            <div className="flex justify-between items-center">
              {/* <span className="font-headline text-2xl">First Service</span> */}
              <span className="font-sans text-sm font-bold">8 AM - 11:30 AM</span>
            </div>
          </div>
          {/* <div className="border-b border-outline pb-6">
            <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-secondary mb-2">
              SUNDAY MORNING
            </p>
            <div className="flex justify-between items-center">
              <span className="font-headline text-2xl">
                Celebration Service
              </span>
              <span className="font-sans text-sm font-bold">10:00 AM</span>
            </div>
          </div> */}
          <div className="border-b border-outline pb-6">
            <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-secondary mb-2">
              THURSDAY MORNING
            </p>
            <div className="flex justify-between items-center">
              {/* <span className="font-headline text-2xl">Prophetic Hour</span> */}
              <span className="font-sans text-sm font-bold">6:30 AM - 7:45 AM</span>
            </div>
          </div>
          <div>
            <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-secondary mb-2">
              FRIDAY EVENING
            </p>
            <div className="flex justify-between items-center">
              {/* <span className="font-headline text-2xl">Dominion Study</span> */}
              <span className="font-sans text-sm font-bold">5 PM - 6 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
