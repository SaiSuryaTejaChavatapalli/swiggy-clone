import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/context/UserContext";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import Demo from "./components/Demo";
import BodyShimmer from "./components/BodyShimmer";
import CartPage from "./components/CartPage";
import Demo2 from "./components/Demo2";
import RestaurantMenuShimmer from "./components/RestaurantMenuShimmer";
import { Accordion } from "@mui/material";
import CustomizedAccordions from "./utils/CustomizedAccordian";
import ErrorFallback from "./components/ErrorFallback";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Sai Surya Teja",
    email: "saisuryateja3@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <div className="h-screen flex flex-col">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/demo", element: <CustomizedAccordions /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<BodyShimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <ErrorFallback />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
