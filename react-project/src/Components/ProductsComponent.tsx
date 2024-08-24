import { useGetProductsQuery } from "../Api/Api";
import "../StyleSheet/ProductStyle.css";
import { useDispatch } from "react-redux";
import { Dispatch } from "../Redux Store/store";
import { AddToCart } from "../Features/AddToCart";

export default function ProductsComponent() {
  const { data, isError, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch<Dispatch>();
  return (
    <div className="container">
      {isError?<>Some Issue occured</> :<></>}
      {isLoading ? (
        <h1>...Loading</h1>
      ) : (
        data?.map((item) => {
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
                  dispatch(AddToCart(item));
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
