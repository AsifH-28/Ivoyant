import CartProducts from "./Components/CartProducts";
import ProductsComponent from "./Components/ProductsComponent";

function App() {
  return (
    <>
      <ProductsComponent />
      <br />
      <h1>Cart Products</h1>
      <CartProducts />
    </>
  );
}

export default App;
