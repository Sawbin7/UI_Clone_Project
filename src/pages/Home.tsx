import Footer from "../components/Footer";
import HeroSec from "../components/HeroSec";
import Events from "../components/Home/Events";
import Info from "../components/Home/Info";
import Quote from "../components/Home/Quote";

const Home = () => {
  return (
    <>
      <HeroSec />
      <Quote />
      <div className="container flex flex-col w-full items-center ">
        <div className="my-10 space-y-4">
          <h1 className="font-bold text-4xl"> Upcoming Events</h1>
          <div className="bg-[#fb2056] w-20 h-px mx-auto "> </div>
        </div>

        <div className=" space-y-3 flex flex-col items-center md:flex-row md:justify-evenly ">
          <Events
            src="./Images/everest1.jpeg"
            title="Everest Camp Trek"
            desc="Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit."
          />
          <Events
            src="./Images/wh1.jpeg"
            title="Walking Holidays"
            desc="Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit."
          />
        </div>
      </div>

      <div
        style={{
          backgroundImage: 'url("./Images/parallax.jpeg")',
        }}
        className="h-150 w-full  bg-no-repeat bg-cover  relative bg-fixed mt-10"
      >
        <div className="absolute inset-0 bg-black opacity-60"> </div>

        <div
          className=" container h-full w-full z-10 relative text-white  flex justify-end items-center
          "
        >
          <Info
            title="Explore The World"
            desc="Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. Fert his. Recessit mentes praecipites locum caligine sui egens erat. Silvas caeli regna."
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
