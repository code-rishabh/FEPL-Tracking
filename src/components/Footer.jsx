import heroImage from "../assets/FEPL-Website-Logo-white.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black m-auto p-10 flex items-center flex-col text-slate-300 text-sm">
      <div className="flex m-auto w-full justify-center gap-40 p-10">
        <div className="flex flex-col gap-5 leading-8 w-full">
          <span>
            <img src={heroImage} className="h-20" alt="" />
          </span>
          <p>
            Fore Excel a trusted tech distributor, representing global brands.
            Comprehensive hardware and software solutions for valued clients.
            Providing technology and customized solutions with partners across
            30 countries and headquarters in India, Dubai and USA.
          </p>
          <ul className="flex gap-5">
            <li>
              <BsFacebook
                size={25}
                className="hover:fill-red-700 hover:cursor-pointer"
              />
            </li>
            <li>
              <BsInstagram
                size={25}
                className="hover:fill-red-700 hover:cursor-pointer"
              />
            </li>
            <li>
              <BsTwitterX
                size={25}
                className="hover:fill-red-700 hover:cursor-pointer"
              />
            </li>
            <li>
              <BsLinkedin
                size={25}
                className="hover:fill-red-700 hover:cursor-pointer"
              />
            </li>
          </ul>
        </div>
        <div className="w-[50%]">
          <ul className="flex flex-col gap-2 leading-7">
            <li className="text-xl font-bold text-white">Prodcut Offerings</li>
            <li>Consumer Electronics</li>
            <li>Wearables</li>
            <li>Home Automation</li>
            <li>Gaming Accessories</li>
            <li>IT Accessories</li>
            <li>Office & Industrial Automation</li>
            <li>Mobility</li>
            <li>Conference Room Solutions</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 leading-7">
          <h1 className="text-white font-bold text-2xl">Contact Info</h1>
          <p>
            Fore Excel Pvt Ltd. 901, 902 & 905, Vantage-C Tower by Bramha Corp.
            Pashan Road, Chandani Chowk Opp: Bavdhan Police Chowki Pune : 411021
          </p>
          <span>
            <p className="text-white font-bold">Email:</p>
            <p>support@foreexcel.com</p>
          </span>
          <span>
            <p className="text-white font-bold">Phone:</p>
            <p>+91 8007711102</p>
          </span>
        </div>
      </div>
      <hr className="w-full" />
      <div>
        <p>© Copyright 2024 - ForeExcel | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
