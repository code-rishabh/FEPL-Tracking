import bgImage from "../assets/shipping-image-3.jpg";
// import { GiAirplaneDeparture } from "react-icons/gi";

const FourthSection = () => {
  return (
    <div className="w-[90vw] self-center mt-[20vh] h-screen flex flex-col md:flex-row items-center justify-center">
      <img
        src={bgImage}
        className="block md:hidden object-cover rounded-t-xl md:rounded-xl h-[50%] md:h-[85vh] w-full md:w-[40%]"
        alt=""
      />
      <div className="flex flex-col bg-white gap-9 shadow-black/50 shadow-md w-full md:w-[50%] md:h-[70vh] md:rounded-l-xl rounded-b-xl p-5">
        <div className="flex flex-col gap-1">
          <p className="text-4xl font-bold">Enterprise Logistics Services</p>
          <p className="text-xl">Business Only</p>
        </div>
        <hr className="w-20 h-1 bg-black" />
        <div>
          Find out how ForeExcel Supply Chain can revolutionize your business as
          a 3PL provider.
        </div>
        <div className="w-full bg-black/10 rounded-xl p-5 flex flex-col gap-5">
          <p className="font-semibold">Services Available</p>
          <span className="grid grid-cols-2 gap-3 text-sm">
            {/* <span> */}
            {/* {GiAirplaneDeparture} */}
            <p>Warehousing</p>
            {/* </span> */}
            <p>Packaging</p>
            <p>Real Estate</p>
            <p>Transport</p>
            <p>Service Logistics</p>
            <p>And more!</p>
          </span>
        </div>
        <button className="w-[90%] self-center rounded-lg h-[10vh] text-white hover:bg-red-800 hover:scale-110 duration-300 bg-red-600">
          Explore ForeExcel Supply Chain
        </button>
      </div>
      <img
        src={bgImage}
        className="hidden md:block object-cover rounded-xl h-[85vh] w-[40%]"
        alt=""
      />
    </div>
  );
};

export default FourthSection;
