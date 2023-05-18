import { render } from "@testing-library/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../utils/redux/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering Header Component", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/Dummy.png");
});

test("Online Status green on rendering header ", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("✅");
});
test("Cart Should have the 0 Items ", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart-3");
});

test("Footer should be present when rendered", () => {
  const footer = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );
  expect(footer.getByTestId("footer").innerHTML).toBe(
    "<h1>This Page is developed by Dummy Name-dummy@gmail.com</h1>"
  );
});
