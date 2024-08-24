import { RootState } from "../Redux Store/store";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "../Redux Store/store";
import { RemoveFromCart } from "../Features/AddToCart";

export default function CartProducts() {
  const CartItems = useSelector((state: RootState) => state.AddToCartSlice);
  const dispatch = useDispatch<Dispatch>();

  return (
    <div className="container">
      {CartItems?.map((item) => {
        return (
          <div className="product-card" key={item.id}>
            <img
              src={item.imageUrl ? item.imageUrl : undefined}
              alt="Product 1"
              className="product-image"
            ></img>
            <h2 className="product-name">{item.name}</h2>
            <p className="product-description">{item.description}</p>
            <p className="product-price">{item.price}</p>
            <button
              className="product-button"
              onClick={() => {
                dispatch(RemoveFromCart(item.id));
              }}
            >
              Remove to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
