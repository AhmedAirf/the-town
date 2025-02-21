import { FaBus, FaBicycle, FaBuilding } from "react-icons/fa";

const Introduction = () => {
  return (
    <div>
      <div
        className="flex flex-col md:flex-row p-6 md:p-16 gap-6 md:gap-20 mt-24"
        id="introduction"
      >
        <div className="flex items-center justify-center md:justify-start">
          <img
            src="/img/the-town-01.jpg"
            alt="Town Image"
            className="w-full md:w-[40em] lg:w-[50em] rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-5 md:gap-7 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-600">
            <span>Introduction</span>
          </h1>
          <p className="text-lg md:text-xl">
            The Town is a simple CSS template built on Bootstrap v4.1.3,
            featuring a smooth parallax layout that you can use for your
            websites.
          </p>
          <p className="text-lg md:text-xl">
            Please tell your friends about our site templatemo. Thank you.
            Curabitur dapibus tristique enim a imperdiet. Etiam tristique sem
            sed condimentum posuere.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="#our-work">
              <button className="bg-cyan-600 text-white cursor-pointer px-4 py-2 rounded-2xl text-lg md:text-xl hover:bg-cyan-700 transition-colors">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <FaBus className="text-cyan-600 text-6xl md:text-8xl mb-4" />
              <h3 className="text-xl font-bold text-cyan-600">
                Curabitur at elit eu risus
              </h3>
              <p className="text-gray-600">
                Sed ultrices sit amet mi eu malesuada. Cras ultricies gravida
                nisi, ac pellentesque nunc tincidunt quis.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaBicycle className="text-cyan-600 text-6xl md:text-8xl mb-4" />
              <h3 className="text-xl font-bold text-cyan-600">
                Nunc sed metus vel nisi
              </h3>
              <p className="text-gray-600">
                Praesent ut finibus leo. Duis et tempus ipsum, id pretium nunc.
                Vivamus imperdiet sem quis orci pharetra.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaBuilding className="text-cyan-600 text-6xl md:text-8xl mb-4" />
              <h3 className="text-xl font-bold text-cyan-600">
                Fusce sed nisi sagittis
              </h3>
              <p className="text-gray-600">
                Donec vestibulum libero nisl. Curabitur ac orci ac lorem blandit
                volutpat. Sed ac sodales nibh.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
