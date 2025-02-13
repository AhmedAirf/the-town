const Footer = () => {
  return (
    <div className="relative">
      <img
        src="/img/the-town-bg-02.jpg"
        alt="Footer Background"
        className="w-full h-auto"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col items-start justify-center px-20 text-white space-y-6">
        <h1 className="text-6xl font-bold">Contact Us</h1>
        <div className="w-80 h-1 bg-white"></div>

        <p className="max-w-2xl text-lg">
          Nullam tincidunt, lacus a suscipit luctus, elit turpis tincidunt dui,
          non tempus sem turpis vitae lorem. Maecenas eget odio in sapien
          ultrices viverra vitae vel leo.
        </p>

        <div className="flex space-x-10">
          <span>010-020-0340</span>
          <span>info@company.co</span>
        </div>

        <div className="flex space-x-4">
          <input
            type="email"
            placeholder="Subscribe your email"
            className="px-4 py-2 text-black bg-white border rounded-lg"
          />
          <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
