import React, { useState } from "react";
// import Item from "./Item";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const AlItems = () => {
  const nagigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [user, SetUser] = useState();


  

  const handle1 = async (e) => {
    e.preventDefault();
    console.log("hellow everyone");
    try {
      const productData = new FormData();
      productData.append("title", title);
      productData.append("description", description);
      productData.append("photo", photo);

      const data = await fetch('http://localhost:8001/api/v1/order/order', {
        method: 'POST',
        body: productData,
      });
     
      console.log(data);
      if (data?.success) {
        // toast.error(data?.message);
        console.log("success");
        navigator("/items");
      } else {
        // toast.success("Product Created Successfully");
        // navigate("/dashboard/admin/products");
        console.log("error");
      }
    } catch (error) {
      console.log(error);
      // toast.error("something went wrong");
    }
  };

  return (
    <div>
      
      <input
        type="text"
        placeholder="enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter descriptio"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

        <input type="file" name="" id="" onChange={(e) =>setPhoto(e.target.files[0])}/>
      <button onClick={handle1}> submit</button>
    </div>
  );
};

export default AlItems;
