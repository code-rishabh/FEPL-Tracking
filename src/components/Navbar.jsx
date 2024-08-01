

const Navbar = () => {
  return (
    <div className="container m-auto bg-gradient-to-r from-slate-100 to-red-600 flex justify-around gap-[40vw] h-16 text-lg items-center fixed w-full z-20 shadow-md">
      <span><img className="h-14" src="/src/assets/FEPL-Website-Logo.png" alt="ForeExcel" /></span>
      <div className="">
        <ul className="flex gap-5 text-white text-sm">
          <li>Find a Location</li>
          <li>Search bar</li>
          <li>Location: India</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar