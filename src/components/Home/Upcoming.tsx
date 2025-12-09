import Info from "./Info";

const Upcoming = () => {
  return (
    <>
      <div className="h-3/6 container flex flex-col md:flex-row justify-center items-center ">
        <div className="md:w-[45%] ">
          <Info
            title="Upcoming Tours & Destination"
            desc="Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris. Sinistra possedit litora ut nabataeaque. Setucant coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque constaque cepit sublime flexi nullus."
          />
        </div>

        <div className="md:grid w-full md:w-[60%] space-y-3 gap-3 h-full md:grid-cols-2 p-4">
          <img
            src="./Images/ski2.jpeg"
            className="rounded-sm w-full h-full md:w-auto"
            alt=""
          />

          <img
            src="./Images/snow-1.jpeg"
            alt=""
            className="rounded-sm w-full h-full md:w-auto"
          />
          <img
            src="./Images/cycle-2.jpeg"
            alt=""
            className="rounded-sm h-full w-full md:w-auto"
          />
          <img
            src="./Images/sw-1.jpeg"
            alt=""
            className="rounded-sm h-full w-full md:w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Upcoming;
