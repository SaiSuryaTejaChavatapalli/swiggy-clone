const Demo2 = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex border border-y-gray-400 border-x-0 m-2  justify-between w-1/2">
        <div className="mt-4">
          <span className="">Veg</span>
          <h1 className="font-semibold">Americano - Hot</h1>
          <h2 className="text-sm">$186</h2>
          <h3 className="text-gray-400 text-xs mt-4">
            Serves 1 | A rich shot of espresso, diluted to create a weakened
            black coffee.
          </h3>
        </div>
        <div className="p-4 flex flex-col">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/bb60vfruj8v9xlfax2ge"
            alt="menu-item"
            className="w-28 h-28 rounded-lg"
          />
          <button className="rounded-lg border border-black p-1 m-1 text-green-700 font-semibold">
            ADD +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo2;
