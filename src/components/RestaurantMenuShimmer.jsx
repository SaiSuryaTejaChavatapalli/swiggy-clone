const RestaurantMenuShimmer = () => {
  return (
    <div>
      {Array(20)
        .fill("")
        .map((item, index) => (
          <div className="flex items-center justify-center" key={index}>
            <div className="flex  m-2  justify-between w-1/2 h-40 bg-gray-200"></div>
          </div>
        ))}
    </div>
  );
};

export default RestaurantMenuShimmer;
