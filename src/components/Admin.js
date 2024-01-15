import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Register from "./Register";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-sky-500 to-indigo-400">
        <div className="grid place-items-center h-screen pb-10">
          <form className="bg-sky-100 p-10 rounded-md">
            <h2 className="flex font-bold justify-center text-2xl">
              Admin Login
            </h2>
            <p className="flex justify-center mb-5">
              Please enter your details.
            </p>
            <div>
              <label>Phone Number</label>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                className="w-full border rounded-md bg-transparent border-gray-400 p-3 my-2"
                required
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                id="phoneNumber"
                placeholder="password"
                className="w-full border rounded-md bg-transparent border-gray-400 p-3 my-2"
              ></input>
            </div>
            <div>
              <button className=" w-full bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
