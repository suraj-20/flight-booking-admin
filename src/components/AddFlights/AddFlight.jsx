import React, { useState } from "react";
import "./AddFlight.css";
import { DatePicker } from "rsuite";

const AddFlight = () => {
  const [flightDetails, setFlightDetails] = useState({
    airline: "",
    flight_number: "",
    departureAirport: "",
    destinationAirport: "",
    departureDateTime: "",
    arrivalDateTime: "",
    availableSeats: 50,
    price: "",
    class_of_service: "",
  });

  const handleChange = (e) => {
    setFlightDetails({ ...flightDetails, [e.target.name]: e.target.value });
    console.log(flightDetails);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2); // Add leading zero
    const day = `0${date.getUTCDate()}`.slice(-2); // Add leading zero
    const hours = `0${date.getUTCHours()}`.slice(-2); // Add leading zero
    const minutes = `0${date.getUTCMinutes()}`.slice(-2); // Add leading zero
    const seconds = `0${date.getUTCSeconds()}`.slice(-2); // Add leading zero

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  };

  const handleDateChange = (date, name) => {
    const formattedDate = formatDate(date);
    setFlightDetails((prevDetails) => ({
      ...prevDetails,
      [name]: formattedDate,
    }));
    console.log(date);
  };

  const addFlights = async () => {
    try {
      let responseData;
      console.log(process.env.REACT_APP_BASE_URL);
      await fetch(` http://localhost:8000/api/v1/addFlightDetails`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flightDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));

      if (responseData.message) {
        // localStorage.setItem("token", responseData.token);
        alert(responseData.message);
        // window.location.replace("/login");
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.error("Error in user signed in.", error);
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Flight Name</p>
        <input
          value={flightDetails.airline}
          onChange={handleChange}
          type="text"
          name="airline"
          placeholder="Flight Name"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Departure Airport Name</p>
          <input
            value={flightDetails.departureAirport}
            onChange={handleChange}
            type="text"
            name="departureAirport"
            placeholder="Origin"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Destination Airport Name</p>
          <input
            value={flightDetails.destinationAirport}
            onChange={handleChange}
            type="text"
            name="destinationAirport"
            placeholder="Destination"
          />
        </div>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Departure Date</p>
          <DatePicker
            name="departureDateTime"
            // selected={new Date(flightDetails.departureDate)}
            selected={new Date(flightDetails.arrivalDateTime)}
            value={new Date(flightDetails.departureDateTime)}
            onChange={(date) => handleDateChange(date, "departureDateTime")}
            dateformat="yyyy-MM-dd'T'HH:mm:ss'Z'"
            placeholder="Arrival Date"
            className="form-control custom-date-input"
            showtimeselect="true"
            timeformat="HH:mm"
            timeintervals={15}
            // timeCaption="Time"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Destination Date</p>
          <DatePicker
            name="arrivalDateTime"
            // selected={new Date(flightDetails.departureDate)}
            value={new Date(flightDetails.arrivalDateTime)}
            selected={new Date(flightDetails.arrivalDateTime)}
            onChange={(date) => handleDateChange(date, "arrivalDateTime")}
            dateformat="yyyy-MM-dd'T'HH:mm:ss'Z'"
            placeholder="Arrival Date"
            className="form-control custom-date-input"
            showtimeselect="true"
            timeformat="HH:mm"
            timeintervals={15}
            // timeCaption="Time"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Class Of Service</p>
        <select
          value={flightDetails.class_of_service}
          onChange={handleChange}
          name="class_of_service"
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
            value={flightDetails.price}
            onChange={handleChange}
            type="text"
            name="price"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Available Seats</p>
          <input
            value={flightDetails.availableSeats}
            onChange={handleChange}
            type="text"
            name="availableSeats"
            placeholder="Type here"
          />
        </div>
      </div>

      <button
        onClick={() => {
          addFlights();
        }}
        className="addproduct-btn"
      >
        Add Flight
      </button>
    </div>
  );
};

export default AddFlight;
