import { useEffect, useState, useContext } from "react";
import UserContext from "../utils/context/UserContext";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import useOnline from "../utils/useOnline";
import BodyShimmer from "./BodyShimmer";
import { restaurantHomeDataUrl } from "../constants";
import { MainPageData } from "../test";
function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // const data = await fetch(restaurantHomeDataUrl);
    // console.log("Data", data);
    // const json = await data.json();
    const json = MainPageData;
    console.log("JSSS", json.data);
    console.log(
      "JSON",
      json?.data.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
    //optional chaining
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Oops! Please Check your Internet Connection</h1>;
  }

  return filteredRestaurants?.length === 0 ? (
    <BodyShimmer />
  ) : (
    <div className="search-container p-5 mx-16 ">
      <input
        className="search-input ml-5"
        data-testid="search-input"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button
        className="search-btn p-2 m-2 bg-green-800 hover:bg-black text-white rounded-md"
        onClick={() => {
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}
        data-testid="search-btn"
      >
        Search
      </button>
      <div
        className="restaurant-list flex flex-wrap justify-around"
        data-testid="res-list"
      >
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={`/restaurants/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
