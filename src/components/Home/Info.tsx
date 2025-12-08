import Button from "../Button";

interface InfoData {
  title: string;
  desc: string;
}

const Info = ({ title, desc }: InfoData) => {
  return (
    <div
      className="flex flex-col items-start space-y-7 w-[40%] p-4

"
    >
      <h1 className="text-4xl font-bold "> {title}</h1>
      <div className="bg-[#fb2056] w-20 h-px  "> </div>
      <p className="text-justify">{desc}</p>
      <Button value="LEARN MORE" />
    </div>
  );
};

export default Info;
