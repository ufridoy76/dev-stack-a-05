import HeroBg from "./../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div>
      <section >
        <div className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex flex-col justify-between mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            
            <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
              <h1 className="text-6xl font-extrabold leading-none">
                Build Your Ideal <br />
                <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Development Stack</span> 

              </h1>
              <p className="my-8 mb-8 text-xl text-[#475569] sm:mb-12">
                Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <button

                  className="px-8 py-3 text-lg font-semibold rounded-xl text-white bg-linear-to-r from-orange-500 to-pink-500"
                >
                  Explore Technologies
                </button>
                <button

                  className="px-8 py-3 text-lg font-semibold border rounded-xl dark:border-gray-800"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={HeroBg}
                alt=""
                className="object-contain h-90 sm:h-80 lg:h-100 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
