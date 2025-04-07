const OurWork = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-15 mb-24gid" id="our-work">
      <div className="text-center">
        <h1 className="text-cyan-600 text-5xl font-bold">Our Work</h1>
        <p className="text-gray-500 max-w-md mx-auto mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis
          beatae rerum pariatur dolorum quae et eligendi quam obcaecati.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory p-4 justify-center w-full">
        <img
          src="/img/gallery-img-01.jpg"
          alt="Work 1"
          className="w-40 md:w-60 rounded-lg shadow-lg object-cover cursor-pointer duration-300 ease-out hover:scale-105 snap-center"
        />
        <img
          src="/img/gallery-img-02.jpg"
          alt="Work 2"
          className="w-40 md:w-60 rounded-lg shadow-lg object-cover cursor-pointer duration-300 ease-out hover:scale-105 snap-center"
        />
        <img
          src="/img/gallery-img-03.jpg"
          alt="Work 3"
          className="w-40 md:w-60 rounded-lg shadow-lg object-cover cursor-pointer duration-300 ease-out hover:scale-105 snap-center"
        />
        <img
          src="/img/gallery-img-04.jpg"
          alt="Work 4"
          className="w-40 md:w-60 rounded-lg shadow-lg object-cover cursor-pointer duration-300 ease-out hover:scale-105 snap-center"
        />
        <img
          src="/img/gallery-img-05.jpg"
          alt="Work 5"
          className="w-40 md:w-60 rounded-lg shadow-lg object-cover cursor-pointer duration-300 ease-out hover:scale-105 snap-center"
        />
      </div>
    </div>
  );
};

export default OurWork;
