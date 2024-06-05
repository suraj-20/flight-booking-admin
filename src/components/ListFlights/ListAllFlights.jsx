import React, { useEffect, useState } from "react";
import "./ListAllFlights.css";

const ListAllFlights = () => {
  const [allFlights, setAllFlights] = useState([]);
  console.log(Array.isArray(allFlights));

  const fetchInfo = async () => {
    await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/getAllFlight`)
      .then((res) => res.json())
      .then((data) => {
        setAllFlights(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="list-product">
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Airline</p>
        <p>Departure Location</p>
        <p>Arrival Location</p>
        <p>Price</p>
        <p>Flight Number</p>
        <p>Available Seats</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allFlights.map((product, index) => {
          return (
            <div
              key={index}
              className="listproduct-format-main listproduct-format"
            >
              <div className="image-and-name">
                <img
                  src={product.img}
                  alt=""
                  width={40}
                  height={40}
                  className="listproduct-product-icon"
                />
                <p>{product.airline}</p>
              </div>
              <p>{product.departure_location}</p>
              <p>{product.arrival_location}</p>
              <p>INR {product.price}</p>
              <p style={{ textTransform: "uppercase" }}>
                {product.flight_number}
              </p>
              <p>{product.available_seats}</p>
              {/* <button
                onClick={() => {
                  removeProduct(product.id);
                }}
                className="listproduct-remove-btn"
              >
                Delete
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAllFlights;
