import React, { Fragment } from "react";
import { Rating } from "@material-ui/lab";
import Card from "react-bootstrap/Card";
import CompanyVideo from "./CompanyVideo";

import { useParams } from "react-router-dom";

const AboutCompany = ({ companies }) => {
  const { id } = useParams();
  let Company = {};
  if (companies && Array.isArray(companies)) {
    companies.map((item) => {
      if (item._id === id) {
        Company = item;
      }
    });
  }

  console.log(Company);

  const options = {
    value: Company.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Fragment>
      <div
        style={{
          padding: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            font: "300 3vmax cursive",
            marginTop: "100px",
          }}
        >
          {Company?.companyName}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "180px",
          }}
        >
          <Card style={{ width: "28rem" }}>
            <Card.Img
              variant="top"
              src={Company?.avatar?.url}
              style={{
                width: "18rem",
                height: "10rem",
                padding: "10px",
              }}
            />
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",

                justifyContent: "flex-start",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "18px",
                }}
              >
                {Company?.ceo}
              </Card.Title>
              <Card.Title
                style={{
                  fontSize: "18px",
                }}
              >
                Chief Executive Officer
              </Card.Title>
              <Card.Title
                style={{
                  fontSize: "18px",
                }}
              >
                No of Employess : {Company?.employees}
              </Card.Title>
              <Card.Title
                style={{
                  fontSize: "18px",
                }}
              >
                Turnover of Company : {Company?.turnover}₹
              </Card.Title>
              <Card.Title
                style={{
                  fontSize: "18px",
                }}
              >
                <Rating {...options} />
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <CompanyVideo video={Company?.video?.url} />
        <h1 style={{ textAlign: "center" }}>About Company</h1>
        <p style={{ margin: "20px 20px" }}>{Company?.paragraphofcompany}</p>

        <h1 style={{ textAlign: "center", margin: "20px 0px" }}>History</h1>
        <p style={{ margin: "20px 20px" }}>{Company?.history}</p>
      </div>
    </Fragment>
  );
};

export default AboutCompany;
