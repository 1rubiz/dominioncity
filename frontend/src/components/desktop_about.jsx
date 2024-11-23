function Desktop_about() {
  return (
    <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            {/* <!-- Header --> */}
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            About Us
            </h2>

            {/* <!-- Subsections --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* <!-- Welcome Section --> */}
            <div className="flex flex-col lg:flex-row items-center">
                <img
                src="/bg/one.jpg"
                alt="Welcome"
                className="w-full lg:w-1/3 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-6"
                />
                <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Welcome
                </h3>
                <p className="text-gray-600">
                    Welcome to Chapel of Dominion ministries digital space; we are a community bound by the love of Christ and dedicated to sharing His message of hope, grace, and redemption. Nestled in the heart of OGIDA QUARTERS, BENIN CITY, our church family extends a heartfelt welcome to all seeking a deeper connection with God and fellow believers.
                </p>
                </div>
            </div>

            {/* <!-- Vision Section --> */}
            <div className="flex flex-col lg:flex-row items-center">
                <img
                src="/bg/two.jpg"
                alt="Vision"
                className="w-full lg:w-1/3 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-6"
                />
                <div className="w-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Vision
                </h3>
                <p className="text-gray-600">
                    To make it right through PRAYERS and the preaching of the WORD of the TRUTH
                </p>
                </div>
            </div>

            {/* <!-- About Section --> */}
            <div className="flex flex-col lg:flex-row items-center">
                <img
                src="/bg/three.jpg"
                alt="About"
                className="w-full lg:w-1/3 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-6"
                />
                <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    About
                </h3>
                <p className="text-gray-600">
                    Experience the joy of worship in our uplifting services where the Word of God is proclaimed with passion, and the presence of the Holy Spirit is palpable. Beyond the sanctuary, discover the warmth of genuine fellowship through our community events, small groups, and outreach programs.
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>

  )
}

export default Desktop_about