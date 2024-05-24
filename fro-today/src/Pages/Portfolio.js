import React, { useState, useEffect } from "react";
// import Items from "./Items";
import AlItems from "../components/AlItems";
// import Header from "./Header";
import axios from "axios";

const Portfolio = ({ fun }) => {
  const [loading, setLoading] = useState(false);
  const [order, setorder] = useState();

  useEffect(() => {
    fun(true);
    return () => {
      fun(false);
    };
  }, []);

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
      {/* <Header /> */}

      <div>
        <AlItems />
      </div>

      <div className="items">
        {order ? (
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
        )}
      </div>
    </div>
  );
};

export default Portfolio;
