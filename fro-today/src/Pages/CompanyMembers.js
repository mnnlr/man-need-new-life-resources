import { useEffect,useState } from "react";
import axios from "axios";

const CompanyMembers = () => {
    
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            const { data } = await axios.get('http://localhost:8000/client');
            setClients(data);
        };
        fetchClients();

    }, []);
console.log('clients : ',clients)
    return (
        <div id="clientCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"> 
            <div>
                <video autoPlay muted loop>
                    <source src={`data:video/mp4;base64,${clients[0]?.video}`} type="video/mp4" />
                </video>
            </div>
            <div>
                <h3>{clients[0]?.companyName}</h3>
                <h4>{clients[0]?.clientName}</h4>
            </div>

            <div className="carousel-inner">
                {clients.map(({ _id, clientName, companyName, Images }, index) => (
                    <div key={_id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div className="container">
                            <div className="row">
                                {Images.map((image, imgIndex) => (
                                    <div key={imgIndex} className="col">
                                        <img src={`data:image/png;base64,${image}`} className="d-block w-100" alt="" />
                                    </div>
                                ))}
                            </div>
                            <div className="carousel-caption">
                                <h5>{companyName}</h5>
                                <p>{clientName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#clientCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#clientCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CompanyMembers;