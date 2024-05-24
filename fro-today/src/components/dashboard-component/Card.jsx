import { useNavigate } from "react-router-dom"
const Card = ({cardData}) => {

    const navigate = useNavigate()

    return (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <div className="card" style={{width:'15rem'}}>
                <img src={cardData.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{cardData.title}</h5>
                    <p className="card-text" style={{width:'100%',height:'100px',overflow:'hidden'}}>{cardData.text}</p>
                    <button onClick={()=>navigate(`/tech/${cardData?.id}`)} className="btn btn-primary">Explore {cardData.title}</button>
                </div>
            </div>
        </div>
    )
}

export default Card