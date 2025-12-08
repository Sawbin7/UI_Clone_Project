interface propType {
  value: string;
}

const Button = ({ value }: propType) => {
  return (
    <>
      <button className="p-2 w-auto inline-block cursor-pointer  font-bold text-white font-mono rounded-xl px-5 bg-[#fb2056]">
        {" "}
        {value}
      </button>
    </>
  );
};

export default Button;
