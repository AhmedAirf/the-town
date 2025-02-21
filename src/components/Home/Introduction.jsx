const Introduction = () => {
  return (
    <div className="flex  flex-col md:flex-row p-6 md:p-16 gap-6 md:gap-20 mt-25 sm:">
      <div className="flex items-center  justify-center md:justify-start  ">
        <img
          src="/img/the-town-01.jpg"
          alt="Town Image"
          className="w-full md:w-[40em] lg:w-[50em] rounded-lg shadow-lg  "
        />
      </div>
      <div className="flex flex-col gap-5 md:gap-7 text-center md:text-left  ">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-600">
          <span>Introduction</span>
        </h1>
        <p className="text-lg md:text-2xl">
          The Town is a simple CSS template built on Bootstrap v4.1.3, featuring
          a smooth parallax layout that you can use for your websites.
        </p>
        <p className="text-lg md:text-2xl">
          Please tell your friends about our site templatemo. Thank you.
          Curabitur dapibus tristique enim a imperdiet. Etiam tristique sem sed
          condimentum posuere.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-cyan-600 text-white cursor-pointer px-4 py-2 rounded-2xl text-lg md:text-xl">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
