import { useSelector } from "react-redux";
const Cart = () => {
  const itemsList = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {itemsList.map((item, index) => (
          <h1 key={index}>
            {index + 1}-{item}
          </h1>
        ))}
      </div>
    </div>
  );
};
export default Cart;
