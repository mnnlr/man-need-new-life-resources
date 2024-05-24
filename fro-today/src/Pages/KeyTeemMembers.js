import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
// import './ShowEmployees.css';

import axios from 'axios';

const KeyTeemMembers = () => {
  const [employees, setEmployees] = useState([]);
console.log('employees : ',employees)
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8000/employee');
      console.log('response : ',response)
      if (response.data) {
        
        setEmployees(response.data);
      } else {
        console.error('Failed to fetch employees:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-start">
        {employees.map(employee => (
          <div key={employee._id} className="col-md-4 mb-4">
            <Card className="employee-card">
              <Card.Img variant="top" src={employee?.image ? `data:image/png;base64,${employee?.image}`:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} className="card-img-top" />
              <Card.Body>
                <Card.Title>{employee.name}</Card.Title>
                <Card.Text>
                  <strong>Designation:</strong> {employee.designation}<br />
                  <strong>Level:</strong> {employee.level}<br />
                  <strong>About:</strong> {employee.about}<br />
                  <strong>Experience:</strong> {employee.experience}
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyTeemMembers;
