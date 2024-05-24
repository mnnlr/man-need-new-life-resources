import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/fetchHook";
import { Paper } from "@mui/material";

const TrackLeave = () => {

    const navigate = useNavigate();
    const [{apiData}] = useFetch('leave');
    
    return (
        <div style={{padding:'20px'}}>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingRight:'20px'}}>
                <h3>
                    Leave Tracker
                </h3>
            </div>
            <Paper elevation={3} className="scrollbar" style={{borderRadius:'10px',marginTop:'20px',maxHeight:'450px',minHeight:'300px',overflow:'auto'}}>
                
                <table className="table table-hover">

                    <thead style={{ position: 'sticky',height:'60px',top: '0', zIndex: '999', background: 'white' }}>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Employee Id</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Level</th>
                            <th scope="col">Presenties</th>
                        </tr>
                    </thead>

                    <tbody>
                        {apiData?.Data?.length > 0 ? apiData?.Data?.map(({_id,status,id:{_id:employeeID,firstName,lastName,designationLevel,designation,employeeId,img}})=>(
                            <tr key={_id} style={{cursor:'pointer'}} onClick={()=>navigate(`/approve-leave/${employeeID}`)}>
                                <th scope="row">
                                    <img src={img?img:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                                </th>
                                <td>{`${firstName} ${lastName}`}</td>
                                <td>{employeeId}</td>
                                <td>{designation}</td>
                                <td>{designationLevel}</td>
                                <td style={{color:'green'}}>{status}</td>
                            </tr>)):
                            <tr style={{fontWeight:'bold'}}>No Leave Pending</tr>
                        }
                    </tbody>

                </table>

            </Paper>
        </div>
    )
}

export default TrackLeave