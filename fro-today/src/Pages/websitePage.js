import { useEffect,useState } from "react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from "react-router-dom";
import '../styles/webpage.css';
export default function WebsitePage() {
    const {id}=useParams();
    const [page,setPage]=useState(null);
    {/*
    const bufferData=page.homePage.data.data
    const uint8Array = new Uint8Array(bufferData);
    const blob = new Blob([uint8Array], { type: 'image/jpeg' });
    const imageUrl = URL.createObjectURL(blob);*/}
    useEffect(() => {
        // Replace 'http://localhost:5000' with your server's base URL
        axios.get(`http://localhost:8000/websitePage?id=${id}`)
            .then(res => {
                console.log(res.data);
                setPage(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="webPage-div">
            <h1>hello</h1>
            <span>hehehe</span>
            <Carousel>
                    <Carousel.Item>
                        <img src='' alt="slide 1"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='' alt="slide 2"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='' alt="slide 3"/>
                    </Carousel.Item>
                </Carousel>
        </div>
    );
}
