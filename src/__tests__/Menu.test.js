import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../../src/components/Body";
import Header from "../../src/components/Header";
import { Provider } from "react-redux";
import store from "../utils/redux/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../components/RestaurantMenu";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU_DATA);
    },
  });
});

test("Add Items to the cart", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantMenu />
        <Header />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(menu.getByTestId("restaurant-menu")));
  const addBtnList = menu.getAllByTestId("addItem");
  fireEvent.click(addBtnList[0]);
  const cart = menu.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart-4");
});
