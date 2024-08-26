
import { useGetProductsQuery, usePostProductMutation } from "./Api/Api";
import AddProduct from "./Components/AddProduct";
import UpdateProduct from "./Components/UpdateProduct";
import "./StyleSheet/Style.css"

function App() {

 

  const { data, isFetching, isLoading, isSuccess, isError } = useGetProductsQuery();

  const [PostMethod] = usePostProductMutation();
  console.log(data);

  return(
    <div className="container">
      {isError?<>Some Issue occured</> :<></>}
      {isLoading ? (
        <h1>...Loading</h1>
      ) : (
        data?.map((item) => {
          return (
            <div className="product-card" key={item.id}>
              {item.id}
              <img
                src={item.imageUrl ? item.imageUrl : undefined}
                className="product-image"
              ></img>
              <h2 className="product-name">{item.name}</h2>
              <p className="product-description">{item.description}</p>
              <p className="product-price">{item.price}</p>
             
            </div>
          );
        })
      )}
      <AddProduct />
      <UpdateProduct />
    </div>
  );

  
}

export default App;
