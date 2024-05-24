import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/websitedevelopment.css";
const WebsiteDevelopment = () => {
  return (
    <Container>
      <h1
        className="text-center mb-4"
        style={{ color: "#007bff", marginTop: "70px" }}
      >
        Website Development
      </h1>
      <Carousel fade style={{ "--bs-control-color": "red" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JkbyIgZkXYYtnlDws4Nc71kiov2iTDDdDVY7q5G99w&s"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Responsive Design</h3>
            <p>Create websites that adapt to any device screen size.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Interactive UI</h3>
            <p>Engage users with intuitive and interactive interfaces.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/n2ut_ylP8Gk/maxresdefault.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Optimized Performance</h3>
            <p>Ensure fast loading times and smooth user experience.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row className="mt-5">
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Frontend Development</Card.Title>
              <Card.Text>
                Utilize modern frontend technologies like React.js for dynamic
                and interactive user interfaces.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Backend Development</Card.Title>
              <Card.Text>
                Implement robust backend solutions using frameworks like Node.js
                and Express.js.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Database Integration</Card.Title>
              <Card.Text>
                Integrate databases such as MongoDB or MySQL for storing and
                managing website data.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WebsiteDevelopment;
