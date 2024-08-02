import feplLogo from '../assets/FEPL-Website-Logo.png'

const Navbar = () => {
  return (
    <div className="container m-auto bg-gradient-to-r from-slate-100 to-red-600 flex justify-around gap-[40vw] h-16 md:text-lg items-center fixed w-full z-20 shadow-md">
      <span><img className="h-10 md:h-14" src={feplLogo} alt="ForeExcel" /></span>
      <div className="">
        <ul className="hidden md:flex gap-5 text-white text-sm">
          <li>Find a Location</li>
          <li>Search bar</li>
          <li>Location: India</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar