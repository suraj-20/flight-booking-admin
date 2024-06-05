import React from "react";
import "./AddFlight.css";

const AddFlight = () => {
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Flight Name</p>
        <input
          // value={productDetails.name}
          // onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Flight Name"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Departure Airport Name</p>
          <input
            // value={productDetails.old_price}
            // onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Origin"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Destination Airport Name</p>
          <input
            // value={productDetails.new_price}
            // onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Destination"
          />
        </div>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Departure Date</p>
          <input
            // value={productDetails.old_price}
            // onChange={changeHandler}
            type="Date"
            name="old_price"
            placeholder=""
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Destination Date</p>
          <input
            // value={productDetails.new_price}
            // onChange={changeHandler}
            type="date"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Class Of Service</p>
        <select
          // value={productDetails.category}
          // onChange={changeHandler}
          name="category"
          id=""
          className="add-product-selector"
        >
          <option value="Select">Select</option>
          <option value="Economy">Economy</option>
          <option value="First Class">First Class</option>
          <option value="Business">Business</option>
          <option value="Business Economy">Business Economy</option>
        </select>
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            // value={productDetails.old_price}
            // onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Available Seats</p>
          <input
            // value={productDetails.old_price}
            // onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
      </div>

      <button
        // onClick={() => {
        //   addProduct();
        // }}
        className="addproduct-btn"
      >
        Add Flight
      </button>
    </div>
  );
};

export default AddFlight;
