import heroImage from "../assets/shipping-image-2.jpg";
import { SlCalender, SlDoc } from "react-icons/sl";
const HeroSection = () => {
  return (
    <div className="relative">
      <img className="object-cover h-[70vh] w-[100vw] blur-[2px]" src={heroImage} alt="" />
      <div className="flex flex-col bg-black/40 rounded-xl px-10 absolute w-[50%] justify-evenly h-[20vh] items-center top-[20%] left-[25%]">
        <div className="text-white w-full font-extrabold text-xl">Track Your Shipment</div>
        <div className="flex rounded-lg border-2 bg-white border-white w-full items-center justify-between">
          <input className=" px-2 h-[7vh] w-[40vw] outline-none font-semibold text-gray-700 text-sm rounded-lg" placeholder="Enter your tracking number(s)" type="text" />
          <button className="bg-red-600 h-[7vh] hover:bg-red-700 duration-300 hover:scale-110 rounded-lg w-28 text-white">
            Track
          </button>
        </div>
      </div>
      <div className="flex bg-white rounded-xl absolute w-[50%] justify-center h-[20vh] items-center top-[85%] left-[25%] shadow-sm shadow-black/50">
        <div className="hover:scale-110 duration-300 gap-2 h-full w-full items-center justify-center flex flex-col rounded-l-xl ">
          <span>
            <SlCalender size={20} fill="red"/>
          </span>
          <p className="font-bold">Ship Now</p>
          <p className="text-black/80">Find the right service</p>
        </div>
        <span className="border h-full border-black/20"></span>
        <div className="hover:scale-110 duration-300 gap-2 h-full w-full items-center justify-center flex flex-col rounded-r-xl">
          <span>
            <SlDoc size={20} fill="red"/>
          </span>
          <p className="font-bold">Get a Quote</p>
          <p className="text-black/80">Estimate cost to share and compare</p>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
