const Footer = () => {
  return (
    <div className="relative" id="contact-us">
      <img
        src="/img/the-town-bg-02.jpg"
        alt="Footer Background"
        className="w-full h-dvw md:h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col items-start justify-center px-10 sm:px-20 text-white space-y-4 sm:space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Contact Us
        </h1>

        <div className="w-40 sm:w-80 h-1 bg-white"></div>

        <p className="max-w-2xl text-base sm:text-lg">
          Nullam tincidunt, lacus a suscipit luctus, elit turpis tincidunt dui,
          non tempus sem turpis vitae lorem. Maecenas eget odio in sapien
          ultrices viverra vitae vel leo.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-2 sm:space-y-0">
          <span>010-020-0340</span>
          <span>info@company.co</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-md">
          <input
            type="email"
            placeholder="Subscribe your email"
            className="px-4 py-2 text-black bg-white border rounded-lg w-full sm:w-auto"
          />
          <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 w-full sm:w-auto">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
