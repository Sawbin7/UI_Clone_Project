const Quote = () => {
  return (
    <>
      <div className="bg-gray-200  w-full p-10">
        <div className="container flex justify-around items-start gap-7 ">
          <img src="/Images/quote.png" alt="Hero" className="h-20 w-20" />
          <div className="flex flex-col gap-3">
            <p className="w-[90%]">
              {" "}
              "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris."
            </p>
            <p>-Adam Sendler</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
