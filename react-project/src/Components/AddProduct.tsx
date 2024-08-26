import { ChangeEvent, useState } from "react";
import "../StyleSheet/Form.css";
import { Product } from "../Interface/interface";
import { usePostProductMutation } from "../Api/Api";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [PostProduct] = usePostProductMutation();
  const navigate = useNavigate();
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      setProduct({ ...product, [name]: true });
    } else if (e.target.name === "tags") {
      const formatData = e.target.value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
      setProduct({ ...product, [name]: formatData });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    PostProduct(product);
    setProduct({
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
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="id">Product ID:</label>
        <input
          type="number"
          id="id"
          name="id"
          value={product.id}
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
      </div>

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

      <button type="submit">Submit</button>
      <br/>
      <button onClick={()=>{
          navigate("/")
      }}>Home</button>
      <br/>
         <button onClick={()=>{
          navigate(-1)
      }}>Back</button>
    </form>
  );
}
