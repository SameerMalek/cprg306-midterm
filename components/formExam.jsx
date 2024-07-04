"use client";
import React, { useState } from "react";

const FormExam = () => {
  const [firstname, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [fullname, setFullname] = useState("");

  const handleChange1 = (event) => {
    setName(event.target.value);
  };

  const handleChange2 = (event) => {
    setSurname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing after submission so that the name stays on the page.

    if (fullname === "") {
      setFullname(firstname + " " + surname);
    } else {
      setFullname("");
    }

    console.log("name: ", firstname, surname);
  };

  return (
    <div>
      {fullname && (
        <div className="bg-blue-200 border border-blue-600 w-fit p-2 m-2 rounded-md">
          Name is: {fullname}
        </div>
      )}
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="p-2 bg-blue-100">
            <label className="px-2">Enter your firstname</label>
            <input
              type="text"
              placeholder="Enter your firstname"
              value={firstname}
              onChange={handleChange1}
              className="text-center"
            />
          </div>
          <div className="p-2 bg-blue-100">
            <label className="px-2">Enter your Surname</label>
            <input
              type="text"
              placeholder="Enter your surname"
              value={surname}
              onChange={handleChange2}
              className="text-center"
            />
          </div>
          <div className="flex items-center justify-center py-2">
            <button
              className="bg-red-100 p-2 rounded-md border border-red-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormExam;
