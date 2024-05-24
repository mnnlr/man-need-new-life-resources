import React, { useEffect } from "react";

import AboutCompany from "./AboutCompany";
import { useDispatch, useSelector } from "react-redux";
import { getcompanyDetails } from "./redux/action/companyAction";

const Company = () => {
  const { companies } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  console.log(companies);

  useEffect(() => {
    dispatch(getcompanyDetails());
  }, [dispatch]);

  return (
    <div>
      <AboutCompany companies={companies?.company} />
    </div>
  );
};

export default Company;
