import Button from "../Button";

interface Data {
  src: string;
  title: string;
  desc: string;
}

const Events = ({ src, title, desc }: Data) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4  p-2 w-[80%] md:w-[40%] ">
      <img
        src={src}
        alt="Image"
        className="bg-cover bg-no-repeat rounded drop-shadow-3xl drop-shadow-gray-900 h-[70%] w-full"
      />
      <h1 className="text-xl font-bold"> {title} </h1>
      <p className="text-center">{desc}</p>
      <Button value="Learn More ->" />
    </div>
  );
};

export default Events;
