const Footer = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="/img/the-town-bg-02.jpg"
        alt="Footer Background"
        className="w-full h-screen "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-10 sm:px-20 text-2xl text-white space-y-4 sm:space-y-6  ">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Contact Us
        </h1>

        {/* Divider */}
        <div className="w-40 sm:w-80 h-1  bg-white"></div>

        {/* Description */}
        <p className="max-w-2xl text-base sm:textarea-sm ">
          Nullam tincidunt, lacus a suscipit luctus, elit turpis tincidunt dui,
          non tempus sem turpis vitae lorem. Maecenas eget odio in sapien
          ultrices viverra vitae vel leo.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-2 sm:space-y-0 text-base">
          <span>010-020-0340</span>
          <span>info@company.co</span>
        </div>

        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-md">
          <input
            type="email"
            placeholder="Subscribe your email"
            className="px-4 py-2 text-black bg-white border rounded-lg w-full sm:w-auto  "
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
