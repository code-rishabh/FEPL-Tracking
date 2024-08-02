import bgImage from "../assets/shipping-image-4.jpg";
// import { GiAirplaneDeparture } from "react-icons/gi";

const SecondSection = () => {
  return (
    <div className="w-[90vw] self-center my-[30vh] lg:my-0 lg:mt-[20vh] h-screen flex flex-col lg:flex-row items-center justify-center">
      <img
        src={bgImage}
        className="lg:hidden object-cover rounded-t-xl lg:rounded-xl h-[50vh] w-full"
        alt=""
      />
      <div className="flex flex-col bg-white gap-9 shadow-black/50 shadow-lg  lg:w-[50%] lg:h-[70vh] rounded-b-xl lg:rounded-l-xl p-5">
        <div className="flex flex-col gap-5">
          <p className="text-4xl font-bold">Document and Parcel Shipping</p>
          <p className="text-xl">For All Shippers</p>
        </div>
        <hr className="w-20 h-1 bg-black" />
        <div>
          Learn about ForeExcel Shipping – the undisputed global leader in
          international express shipping.
        </div>
        <div className="w-full bg-black/10 rounded-xl p-5 flex flex-col gap-5">
          <p className="font-semibold">Services Available</p>
          <span className="grid grid-cols-2 gap-3 text-sm">
            {/* <span> */}
            {/* {GiAirplaneDeparture} */}
            <p>Next Possible Business Day</p>
            {/* </span> */}
            <p>Tailored Business Solutions</p>
            <p>Flexible Import/Export Options</p>
            <p>Wide Variety of Optional Services</p>
          </span>
        </div>
        <button className="w-[90%] self-center rounded-lg h-[10vh] text-white hover:bg-red-800 hover:scale-110 duration-300 bg-red-600">
          Explore ForeExcel Shipping
        </button>
      </div>
      <img
        src={bgImage}
        className="hidden lg:block object-cover rounded-xl h-[85vh] w-[40%]"
        alt=""
      />
    </div>
  );
};

export default SecondSection;
