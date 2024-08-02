const MenuRibbon = () => {
  return (
    <div className="hidden mt-16 md:flex justify-around bg-slate-50 z-10 shadow-md h-16 gap-[30vw] text-sm items-center">
      <div className="w-full flex items-center justify-between px-32 ">
        <div>
          <ul className="flex gap-16">
            <li>Track </li>
            <li>Ship </li>
            <li>Enterprise Logistics Services </li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div>Admin Login</div>
      </div>
    </div>
  );
};

export default MenuRibbon;
