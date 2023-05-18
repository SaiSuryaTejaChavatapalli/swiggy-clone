import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/context/UserContext";
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="res-card w-52 p-2 m-2 shadow-lg">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="restraunt-card" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h5>{user.name}</h5>
    </div>
  );
};

export default RestaurantCard;
