// import { useParams } from "react-router-dom"
// import fakeCardData from "../fakeData/fakeCardData"
// import ProjectCardData from "../fakeData/ProjectCardData"
// import { useState,useEffect } from "react"

// const TechInfo = ()=> {

//     const {id} = useParams()
//     const [Data,setData] = useState([])

//     useEffect(() => {
//         const techId = ProjectCardData.find((datum) => datum.id === parseInt(id))?.TechId;
//         if (techId) {
//             const filteredTechData = fakeCardData.filter((tech) => techId.includes(tech.id));
//             setData(filteredTechData);
//         }
//     }, [id]);

// console.log('fakeCardData : ',Data)

//     return(
//         <div>
//              <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     {Data?.map(({id,title,img,text})=>{
//                         return(<div key={id} className="carousel-item">
//                             <div>
//                                 <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
//                                     <text x="50%" y="50%" fill="#555" dy=".3em">{title}</text>
//                                 </svg>
//                                 <p>
//                                 {text} 
//                                 </p>
//                             </div>
//                         </div>)
//                     })}

//                      <div class="carousel-item active">
//                         <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect>
//                         <text x="50%" y="50%" fill="#444" dy=".3em">{Data[Data?.length-1]?.title}</text></svg>
//                         <p>
//                             {Data[Data?.length-1]?.text}
//                         </p>
//                     </div>

//                 </div>

//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>

//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     )

// }

// export default TechInfo