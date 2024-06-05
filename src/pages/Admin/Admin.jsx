import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddFlight from "../../components/AddFlights/AddFlight";
import Home from "../../components/Home/Home";

const Admin = () => {
  return (
    <BrowserRouter className="admin">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addFlights" element={<AddFlight />}></Route>
        {/* <Route path="/listProduct" element={<ListProduct />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Admin;
