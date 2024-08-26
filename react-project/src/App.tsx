import { Routes,Route,Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AddProduct from "./Components/AddProduct";
import UpdateProduct from "./Components/UpdateProduct";
import { NavLink } from "react-router-dom";
import PageNotFoundTemplate from "./Components/PageNotFoundTemplate";

function App() {
  return (<>
  <nav style={{width:"300px",display:"flex",justifyContent:"space-between", alignItems:"center"}}>
  <NavLink to={"AddProduct"}>Add Product</NavLink>
  <NavLink to={"UpdateProduct"}>Update Product</NavLink>
  </nav>
 
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="AddProduct" element={<AddProduct />} />
    <Route path="UpdateProduct" element={<UpdateProduct />} />
    <Route path="*" element={<PageNotFoundTemplate />}/>
  </Routes>
  
  </>);
}

export default App;
