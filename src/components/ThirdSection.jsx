import bgImage from "../assets/shipping-image-5.jpg";
// import { GiAirplaneDeparture } from "react-icons/gi";

const ThirdSection = () => {
  return (
    <div className="w-[90vw] self-center my-[20vh] md:my-0 h-screen flex flex-col md:flex-row items-center justify-center">
      <img
        src={bgImage}
        className="object-cover rounded-t-xl md:rounded-xl h-[50%] md:h-[85vh] w-full md:w-[40%]"
        alt=""
      />
      <div className="flex flex-col bg-white gap-9 shadow-black/50 shadow-md w-full md:w-[50%] md:h-[70vh] rounded-b-xl md:rounded-r-xl p-5">
        <div className="flex flex-col gap-5">
          <p className="text-4xl font-bold">Cargo Shipping</p>
          <p className="text-xl">Business Only</p>
        </div>
        <hr className="w-20 h-1 bg-black" />
        <div>
          Discover shipping and logistics service options from ForeExcel.
        </div>
        <div className="w-full bg-black/10 rounded-xl p-5 flex flex-col gap-5">
          <p className="font-semibold">Services Available</p>
          <span className="grid grid-cols-2 gap-3 text-sm">
            {/* <span> */}
            {/* {GiAirplaneDeparture} */}
            <p>Air Freight</p>
            {/* </span> */}
            <p>Ocean Freight</p>
            <p>Road Freight</p>
            <p>Rail Freight</p>
          </span>
        </div>
        <button className="w-[90%] self-center rounded-lg h-[10vh] text-white hover:bg-red-800 hover:scale-110 duration-300 bg-red-600">
          Explore ForeExcel Shipping
        </button>
      </div>
      
    </div>
  );
};

export default ThirdSection;
