const MenuRibbon = () => {
  return (
    <div className="mt-16 flex justify-around bg-slate-50 z-10 shadow-md h-16 gap-[30vw] text-sm items-center">
      <div>
        <ul className="flex gap-16">
          <li>Track </li>
          <li>Ship </li>
          <li>Enterprise Logistics Services </li>
          <li>Customer Service</li>
        </ul>
      </div>
      <div>
        Admin Login
      </div>
    </div>
  );
};

export default MenuRibbon;
