import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/context/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div
      data-testid="footer"
      className="bg-black flex items-center justify-center "
    >
      <h1 className="text-white my-5">
        This Page is developed by {user.name}-{user.email}
      </h1>
    </div>
  );
};

export default Footer;
