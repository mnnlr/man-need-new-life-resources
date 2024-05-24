import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import '../styles/EmployeeForm.css';
import axios from 'axios';

const EmployeeForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        level: 'L1',
        about: '',
        experience: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            file: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        console.log('formData:', formData);
        
        try {
            const response = await axios.post('http://localhost:8000/employee', 
                formData,
                    {
                    headers: {
                        'Content-Type': 'multipart/form-data' 
                    },
                }
              )
                console.log('response:', response);
        } catch (error) {
            console.log('Error saving data:', error);
        }
    };

    return (
        <div style={{ width: '100%', margin: '0 auto', padding: '40px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontFamily: 'Arial, sans-serif' }}>Employee Details</h1>
            <Form>
                <fieldset>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Name of Employee:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Designation:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Level of Employee:</Form.Label>
                        <Form.Select
                            name="level"
                            value={formData.level}
                            onChange={handleChange}
                            style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                        >
                            <option value="L1">L0</option>
                            <option value="L1">L1</option>
                            <option value="L2">L2</option>
                            <option value="L3">L3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>About:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter something about the employee"
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Experience:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Upload Image:</Form.Label>
                        <Form.Control
                            type="file"
                            name="file"
                            onChange={handleImageChange}
                            style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                        />
                    </Form.Group>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="primary" type="submit" onClick={handleSubmit} style={{ fontFamily: 'Arial, sans-serif', padding: '10px 20px', borderRadius: '5px' }}>
                            Submit
                        </Button>
                    </div>
                </fieldset>
            </Form>
        </div>
    );
};

export default EmployeeForm;
