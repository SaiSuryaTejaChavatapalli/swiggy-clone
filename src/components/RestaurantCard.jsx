import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/context/UserContext";
import StarIcon from "@mui/icons-material/Star";
const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, areaName, slaString } =
    props;

  const { user } = useContext(UserContext);
  return (
    <div className="res-card w-64 p-2 m-2 shadow-lg h-80 rounded-lg flex flex-col justify-between items-start scale-100 hover:scale-105 ease-in duration-100">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restraunt-card"
        className="object-cover rounded-sm"
      />
      <h2 className="text-base text-gray-700 font-semibold">{name}</h2>
      <h3 className="text-sm text-gray-500">{cuisines.join(", ")}</h3>
      <div className="w-full my-2">
        <span
          className={`${
            parseFloat(avgRating) >= 4 ? "bg-lightgreen" : "bg-lightorange"
          } text-white items-center  rounded-sm pb-1`}
        >
          <StarIcon className="text-white text-[1px]" />
          <span className="mx-2 text-xs">{avgRating}</span>
        </span>
        {/* <span className="text-xs mx-2">. {slaString} </span> */}
        <span className="pl-2 text-lg">{areaName} </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
