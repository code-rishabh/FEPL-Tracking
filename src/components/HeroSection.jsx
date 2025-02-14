import heroImage from "../assets/shipping-image-2.jpg";
import { SlCalender, SlDoc } from "react-icons/sl";
const HeroSection = () => {
  return (
    <div className="relative">
      <img className="object-cover h-screen lg:h-[70vh] w-[100vw] blur-[2px]" src={heroImage} alt="" />
      <div className="flex flex-col bg-black/40 rounded-xl lg:px-10 px-5 absolute w-[90%] lg:w-[50%] justify-evenly h-[25vh] lg:h-[20vh] items-center top-[20%] lg:left-[25%] left-[5%]">
        <div className="text-white w-full font-extrabold text-xl">Track Your Shipment</div>
        <div className="flex flex-col lg:flex-row rounded-lg border-2 bg-white border-white w-full items-center justify-between">
          <input className=" px-2 h-[7vh] w-full lg:w-[40vw] outline-none font-semibold text-gray-700 text-xs lg:text-sm rounded-lg" placeholder="Enter your tracking number(s)" type="text" />
          <button className="bg-red-600 h-[7vh] hover:bg-red-700 duration-300 hover:scale-105 rounded-lg lg:w-28 w-full text-white">
            Track
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-white rounded-xl absolute lg:w-[50%] w-[80%] justify-center h-[35%] lg:h-[20vh] items-center top-[60%] lg:top-[85%] left-[10%] lg:left-[25%] shadow-sm shadow-black/50">
        <div className="hover:scale-105 duration-300 gap-2 h-full w-full items-center justify-center flex flex-col rounded-l-xl ">
          <span>
            <SlCalender size={20} fill="red"/>
          </span>
          <p className="font-bold">Ship Now</p>
          <p className="text-black/80">Find the right service</p>
        </div>
        <hr className=" lg:hidden w-full"/>
        <span className="hidden lg:block border h-full border-black/20"></span>
        <div className="hover:scale-105 duration-300 gap-2 h-full w-full items-center justify-center flex flex-col rounded-r-xl">
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
