import { useParams,useNavigate } from "react-router-dom";
import useFetch from "../../hooks/fetchHook";

import axios from 'axios';

import { Paper } from "@mui/material";
import { useAlert } from "../../contextData/AlertProviderContext";

const ApproveLeave = () => {
    const navigate = useNavigate();
    const {setAlert} = useAlert();
    const {id} = useParams();
    const [{apiData}] = useFetch(`api/v1/employee/byId/${id}`);
    const [{apiData:leaveRequest}] = useFetch(`leave/${id}`);

    const handleRequest = async(e,status) => {
        try {

            e.preventDefault();
    
            const {data} = await axios.put(`http://localhost:8000/leave/${id}`,{status},{
                headers:{
                    withCredentials:true,
                    contentType:"application/json"
                }
            });
            console.log('data : ',data)
            setAlert({open:true,message:data.message,type:'success'})
            navigate('/trackleave');
        } catch (error) {
            
        }

    }
    return (
        <div>
            <div style={{padding:'20px'}}>
                <Paper elevation={3} style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'20px',padding:'20px',paddingBottom:'0px',borderRadius:'10px'}}>
                    <div style={{height:'100%'}}>
                        <img src={apiData?.employee?.img?apiData?.employee?.img:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                        <p style={{color:'green',fontWeight:'bold'}}>{apiData?.employee?.employeeId}</p>
                    </div>
                    <div>
                        <div>
                            <h5>{`${apiData?.employee?.firstName} ${apiData?.employee?.lastName}`}</h5>
                        </div>
                        <div>
                            <h6 style={{color:'#d63384'}}><span style={{color:'black'}}>E-mail : </span>{apiData?.employee?.email}</h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 style={{color:'#d63384'}}>{apiData?.employee?.designation}</h5>
                        </div>
                        <div>
                            <h6 style={{color:'#d63384'}}><span style={{color:'black'}}>Level : </span>{apiData?.employee?.designationLevel}</h6>
                        </div>
                    </div>
                    <div style={{marginTop:0}}>
                        <h6 style={{color:'#d63384'}}><span style={{color:'black'}}>Phone Number : </span>{apiData?.employee?.phoneNo}</h6>
                    </div>
                </Paper>

                <Paper elevation={3} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'20px',padding:'20px',marginTop:'20px',paddingBottom:'0px',borderRadius:'10px'}}>
                    
                    <div>
                        <div>
                            <p style={{fontWeight:'bold'}}>
                                <span>Leave Status : </span>
                                <span style={{color:'#d63384',fontWeight:'bold'}}>
                                    {leaveRequest?.Data?.status}
                                </span>
                            </p>
                        </div>
                        <div>
                            <h6 style={{color:'#d63384'}}><span style={{color:'black'}}>
                                Leave Type : </span>{leaveRequest?.Data?.typeOfLeave}
                            </h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 style={{color:'#d63384'}}>
                              <span style={{color:'black'}}>From : </span>{leaveRequest?.Data?.startDate.split('T')[0]}
                            </h5>
                        </div>
                        <div>
                            <h5 style={{color:'#d63384'}}>
                            <span style={{color:'black'}}>To : </span>{leaveRequest?.Data?.endDate.split('T')[0]}
                            </h5>
                        </div>
                        
                    </div>
                    <div>
                        <div style={{marginTop:0}}>
                            <h6 style={{color:'#d63384'}}><span style={{color:'black'}}>Casual Leave Used : </span>{leaveRequest?.Data?.totalCasualLeaveUsed}/{leaveRequest?.Data?.casualLeaveBalance}</h6>
                        </div>
                        <div style={{marginTop:0}}>
                            <h6 style={{color:'#d63384'}}><span style={{color:'black'}}>Sick Leave Used : </span>{leaveRequest?.Data?.totalSickLeaveUsed}/{leaveRequest?.Data?.sickLeaveBalance}</h6>
                        </div>
                    </div>
                    <div>
                        <div style={{marginTop:0}}>
                            <h6 style={{color:'#d63384'}}><span style={{color:'black'}}>Remaining Leave : </span>{(leaveRequest?.Data?.totalCasualLeaveUsed + leaveRequest?.Data?.totalSickLeaveUsed)}/{(leaveRequest?.Data?.casualLeaveBalance + leaveRequest?.Data?.sickLeaveBalance)}</h6>
                        </div>
                    </div>
                </Paper>

                <Paper elevation={3} style={{display:'flex',flexDirection:'column',marginTop:'20px',padding:'20px',paddingBottom:'0px',borderRadius:'10px'}}>

                    <div>
                        <h5 style={{color:'#d63384'}}>Reason</h5>
                    </div>
                    <div>
                        <p style={{color:'gray'}}>{leaveRequest?.Data?.reason}</p>
                    </div>

                </Paper>
                <div style={{display:'flex',gap:'20px',justifyContent:'flex-end',width:'100%',marginTop:'20px',paddingBottom:'0px'}}>
                    <Paper onClick={(e)=>handleRequest(e,false)} elevation={3} style={{display:'flex',justifyContent:'center',width:'100px',borderRadius:'7px',cursor:'pointer'}}>
                        <h5 style={{color:'red'}}>Reject</h5>
                    </Paper>
                    <Paper onClick={(e)=>handleRequest(e,true)} elevation={3} style={{display:'flex',justifyContent:'center',width:'100px',borderRadius:'7px',cursor:'pointer'}}>
                        <h5 style={{color:'green'}}>Accept</h5>
                    </Paper>
                </div>
            </div>
        </div>
    );
}

export default ApproveLeave;