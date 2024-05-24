import React, { useState, useEffect, useContext } from "react";
// import Item from "./Item";
// import Card from "./Card";
import Header from "./Header";
import axios from "axios";
// import { Getdata } from "../store/contex";

const Items = () => {
  // const [order, setOrder] = useState();
  const [loading, setLoading] = useState(false);
  const [order, setorder] = useState();

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://localhost:8001/api/v1/order/all"
      );

      // console.log(data);
      setLoading(false);
      setorder(data?.order);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>

      <div className="items">

      {  order ? (
        order.map((item) => {
          return (
            <>
              <div className="item">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={`http://localhost:8001/api/v1/order/photo/${item._id}`}
                    alt=""
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">
                      {item.description[0].substring(0, 60)}
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <h1>loading</h1>
      ) }

     </div>
    </div>
  );
};

export default Items;
