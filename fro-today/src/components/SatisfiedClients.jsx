import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Rating from './Rating'
import axios from 'axios';

const SatisfiedClients = () => {

    const [rating, setRating] = useState(2.5);

    const [formData, setFormData] = useState({
        clientname: '',
        companyname: '',
        image1: null,
        image2: null,
        image3: null,
        video: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const {name} = e.target;
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            [name]: file
        }));

    };

    const handleVedioChange = (e) => {
        const file = e.target.files[0];    
        setFormData(prevState => ({
            ...prevState,
            video: file
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataWithImage = new FormData();
        
        formDataWithImage.append('clientname', formData.clientname);
        formDataWithImage.append('companyname', formData.companyname);
        formDataWithImage.append('files', formData.image1);
        formDataWithImage.append('files', formData.image2);
        formDataWithImage.append('files', formData.image3);
        formDataWithImage.append('files', formData.video);
        formDataWithImage.append('rating', rating);

    try {
        const response = await axios.post('http://localhost:8000/client', formDataWithImage,{
            headers: {
            'Content-Type': 'multipart/form-data' 
            },
        })
        console.log('response:', response);
  
        } catch (error) {
            console.log('Error saving data:', error);
        }
    };


    return (
        <div style={{ width: '100%', margin: '0 auto', padding: '40px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontFamily: 'Arial, sans-serif' }}>Satisfied Clients</h1>
            <Form>
                
                <fieldset>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Name of Client:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="clientname"
                            value={formData.clientname}
                            onChange={handleChange}
                            style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Name of Company</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter designation"
                            name="companyname"
                            value={formData.companyname}
                            onChange={handleChange}
                            style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                        />
                    </Form.Group>
                    <div style={{display:'flex',gap:'10px'}}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}>Upload Image1:</Form.Label>
                            <Form.Control
                                type="file"
                                name="image1"
                                onChange={handleImageChange}
                                style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Upload Image2:</Form.Label>
                            <Form.Control
                                type="file"
                                name="image2"
                                onChange={handleImageChange}
                                style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Upload Image3:</Form.Label>
                            <Form.Control
                                type="file"
                                name="image3"
                                onChange={handleImageChange}
                                style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                            />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Upload Video:</Form.Label>
                        <Form.Control
                            type="file"
                            name="video"
                            accept="video/*" 
                            onChange={handleVedioChange}
                            style={{ fontFamily: 'Arial, sans-serif', padding: '10px', borderRadius: '5px' }}
                        />
                    </Form.Group>
                    <Rating setRating={setRating} />
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

export default SatisfiedClients;
