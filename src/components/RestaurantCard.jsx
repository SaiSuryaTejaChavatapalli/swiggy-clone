import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/context/UserContext";
import StarRateIcon from "@mui/icons-material/StarRate";
const RestaurantCard = (props) => {
  console.log({ props });
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwoString,
    slaString,
  } = props;

  const { user } = useContext(UserContext);
  return (
    <div className="res-card w-64 p-2 m-2 shadow-lg h-80 rounded-lg flex flex-col justify-between items-start">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restraunt-card"
        className="object-cover rounded-sm"
      />
      <h2 className="text-base text-gray-700 font-semibold">{name}</h2>
      <h3 className="text-sm text-gray-500">{cuisines.join(", ")}</h3>
      <div className="w-full my-3">
        <span
          className={`${
            parseFloat(avgRating) >= 4 ? "bg-green-700" : "bg-orange-400"
          } text-white items-center h-2 w-12 rounded-sm py-1`}
        >
          <StarRateIcon className="text-xs" />
          <span className="mx-2">{avgRating}</span>
        </span>
        <span className="text-xs mx-2">. {slaString} </span>
        <span className="text-xs">. {costForTwoString} </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
