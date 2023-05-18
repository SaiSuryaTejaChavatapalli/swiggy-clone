import { Link } from "react-router-dom";
import Logo from "../utils/assets/food-villa.png";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img
      className="h-20 p-2"
      alt="logo"
      data-testid="logo"
      src={Logo}
      // src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
    />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  const itemsList = useSelector((store) => store.cart.items);
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart" data-testid="cart">
              Cart-{itemsList.length}
            </Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            {user.name}
            <Link to="/login" data-testid="online-status">
              {isOnline ? "✅" : "❌"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
