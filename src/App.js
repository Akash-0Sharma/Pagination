import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    let data = await res.json();

    if (data && data.products) {
      setProduct(data.products);
    }
  };

  console.log(product);
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {product.length > 0 && (
        <div className="products">
          {product.map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
    </>
  );
}
