import { FaBus, FaBicycle, FaBuilding } from "react-icons/fa";
const Introduction2 = () => {
  return (
    <div>
      <section className="py-12 px-6 mt-[8em] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <FaBus className="text-cyan-600 text-8xl mb-4" />
              <h3 className="text-xl font-bold text-cyan-600">
                Curabitur at elit eu risus
              </h3>
              <p className="text-gray-600">
                Sed ultrices sit amet mi eu malesuada. Cras ultricies gravida
                nisi, ac pellentesque nunc tincidunt quis.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaBicycle className="text-cyan-600 text-8xl mb-4" />
              <h3 className="text-xl font-bold text-cyan-600">
                Nunc sed metus vel nisi
              </h3>
              <p className="text-gray-600">
                Praesent ut finibus leo. Duis et tempus ipsum, id pretium nunc.
                Vivamus imperdiet sem quis orci pharetra.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaBuilding className="text-cyan-600 text-8xl mb-4" />
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

export default Introduction2;
