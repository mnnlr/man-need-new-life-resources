import React, { useEffect } from "react";

import About from "./About";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from "./redux/action/portfolioAction";

const PortfolioDetails = () => {
  const { portfolios } = useSelector((state) => state.portfolios);
  const dispatch = useDispatch();
  console.log(portfolios);

  useEffect(() => {
    dispatch(getPortfolio());
  }, [dispatch]);

  return (
    <div>
      <About portfolios={portfolios} />
    </div>
  );
};

export default PortfolioDetails;
