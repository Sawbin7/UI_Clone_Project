import Button from "./Button";
import Navbar from "./Navbar";

const HeroSec = () => {
  return (
    <div
      className=" h-[70vh] bg-cover bg-center bg-no-repeat bg-fixed  "
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1618083707368-b3823daa2726?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="relative container">
        <Navbar />
      </div>

      <div className="flex flex-col  w-full h-full justify-center  items-center">
        <h2 className="text-2xl text-white font-bold">
          {" "}
          Explore the Colourful World
        </h2>
        <span className="bg-[#fb2056] w-20 h-px  "> </span>
        <h1 className="text-5xl md:text-7xl text-white font-bold my-5">
          {" "}
          A Wonderful Gift
        </h1>
        <Button value="LEARN MORE" />
      </div>
    </div>
  );
};

export default HeroSec;
