import { useState } from "react";
import "./App.css";
import { useGetProductsQuery } from "./Api/Api";

function App() {
  const [count, setCount] = useState(0);

  const { data, isFetching, isLoading, isSuccess, isError } =
    useGetProductsQuery(null);
  console.log(data);

  return <></>;
}

export default App;
