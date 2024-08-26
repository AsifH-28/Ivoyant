import { ChangeEvent, useState } from "react";
import { useUpdateproductMutation } from "../Api/Api";
import { Product } from "../Interface/interface";
import { useSelector } from "react-redux";
import { RootState } from "../Redux Store/store";
import "../StyleSheet/Form.css";

export default function UpdateProduct() {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    inStock: false,
    category: "",
    sku: "",
    imageUrl: "",
    rating: 0,
    tags: [],
  });
  const productData:any = useSelector((state:RootState)=>state.api.queries['getProducts(undefined)']?.data);

  const handleChangeForGettingData = (event: ChangeEvent<HTMLInputElement>) => {
    const id:number = (event.target.value) as any;  
     (productData as Product[]).map(
      (item) => {item.id ===  id? setProduct({...product,...item}):null}
    );
    

  };
  const handleChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setProduct({...product,[event.target.name]:event.target.value})
  }
  const [UpdateProduct, { isError, isLoading, isSuccess }] =
    useUpdateproductMutation();
 console.log(isSuccess);
  return (
    <form className="form-container">
      <input type="number" placeholder="enter id" onChange={handleChangeForGettingData} />
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={product.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="inStock">In Stock:</label>
        <input
          type="checkbox"
          id="inStock"
          name="inStock"
          checked={product.inStock}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="sku">SKU:</label>
        <input
          type="text"
          id="sku"
          name="sku"
          value={product.sku}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          step="0.1"
          min="0"
          max="5"
        />
      </div>

      <div className="form-group">
        <label htmlFor="tags">Tags (comma separated):</label>
        <input
          id="tags"
          name="tags"
          value={product.tags}
          onChange={handleChange}
        />
      </div>
<button onClick={()=>{
UpdateProduct(product);
}}>update</button>
    </form>
  );
}
