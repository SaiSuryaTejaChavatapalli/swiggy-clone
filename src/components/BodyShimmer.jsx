const BodyShimmer = () => {
  return (
    <div className="flex flex-wrap justify-between mx-20 mt-16">
      {Array(16)
        .fill("")
        .map((item, id) => (
          <div
            className="h-80 w-64 bg-gray-200 m-2 rounded-lg pl-5 my-5"
            key={id}
          ></div>
        ))}
    </div>
  );
};

export default BodyShimmer;
