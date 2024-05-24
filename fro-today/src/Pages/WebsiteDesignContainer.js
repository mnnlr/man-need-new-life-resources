import { useState } from "react";
// import "./App.css";
import axios from "axios";
import { useForm } from "react-hook-form";

import WebsiteDesignForm from "./WebsiteDesignForm.js";
function WebsiteDesignContainer() {
  const [count, setCount] = useState(0);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [arr, setArr] = useState([]); // Initialize the array
  const [img1, setImage1] = useState(null);
  const [img2, setImage2] = useState(null);
  const [img3, setImage3] = useState(null);
  function updateArray(value, index) {
    setArr((prevArr) => {
      const newArr = [...prevArr]; // Create a copy of the original array
      newArr[index] = value; // Update the value at the specified index
      return newArr; // Return the updated array
    });
  }
  function areAnyEqual(arr, data) {
    let foundEqual = false;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return alert(`${arr[i]} and ${arr[j]} are equal`); // Found two equal values
        }
      }
    }
    if (!foundEqual) {
      delete data.websiteImage1;
      delete data.websiteImage2;
      delete data.websiteImage3;
      data = {
        ...data,
        websiteImages: [img1, img2, img3],
      };
      console.log(data);
      axios
        .post("http://localhost:8000/webDesign/upload", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const submitHandler = (data) => {
    areAnyEqual(arr, data);
  };
  return (
    <div>
      <WebsiteDesignForm />
    </div>
  );
}

export default WebsiteDesignContainer;
