import { Link } from "react-router-dom";
import Logo from "../utils/assets/logo.png";
import useOnline from "../utils/useOnline";
import { useContext, useState } from "react";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Title = () => (
  <a href="/">
    <img
      className="h-20 mt-2 mb-0 ml-6"
      alt="logo"
      data-testid="logo"
      src={Logo}
      // src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
    />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const itemsList = useSelector((store) => store.cart.items);
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg my-0 mr-3">
      <Title />
      <div className="mr-3">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/" className="text-gray-700 hover:text-orangehover">
              HOME
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about" className="text-gray-700 hover:text-orangehover">
              ABOUT
            </Link>
          </li>
          <li className="px-2">
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orangehover"
            >
              CONTACT
            </Link>
          </li>
          <li className="px-2">
            <Link
              to="/instamart"
              className="text-gray-700 hover:text-orangehover"
            >
              INSTAMART
            </Link>
          </li>
          <li className="px-2">
            <Link to="/cart" data-testid="cart">
              <ShoppingCartOutlinedIcon className="text-gray-700 hover:text-orangehover" />
              <sup className="font-bold text-white border border-green-500 bg-lightgreen p-1 rounded-full ml-0">
                {itemsList.length}
              </sup>
            </Link>
          </li>
          {isLoggedIn === true ? (
            <li className="px-2">
              <span className="mr-2 hover:text-orangehover">{user.name}</span>
              <span onClick={() => setIsLoggedIn(!isLoggedIn)}>
                <LogoutIcon
                  className="text-[5px] text-gray-700 cursor-pointer"
                  title
                />
              </span>
            </li>
          ) : (
            <div
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="cursor-pointer"
            >
              Login
            </div>
          )}

          <li>
            <Link to="/login" data-testid="online-status">
              {isOnline ? "🟢" : "❌"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
