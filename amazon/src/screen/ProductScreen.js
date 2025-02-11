import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export default function ProductScreen({ match }) {
  let params = useParams();
  const product = data.products.find((x) => x._id === params.id);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  console.log(product);

  return (
    <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="medium" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price:${product.price}</li>
            <li>
              Description:<p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div>${product.price}</div>
                </div>
              </li>
              <li className="row">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? (
                    <span className="success">In Stock</span>
                  ) : (
                    <span className="danger">Unavailable</span>
                  )}
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
