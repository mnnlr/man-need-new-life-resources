import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Paper } from "@mui/material";
import axios from "axios";

const Shifts = () => {

    const {state} = useLocation();
    const [Data,setData] = useState([])
    const [teamMembers,setTeamMembers] = useState([])

    const handleTeamSelection = async(e,ID)=>{
        const Team = Data?.find(({_id})=>_id === ID)
        setTeamMembers(Team?.teamMembers)
    }
    
    useEffect(()=>{

        const FetchData = async()=>{
            const team = await axios.get(`http://localhost:8000/team`, {
                params: {
                    shift: state?.shift?state?.shift:'morning'
                },
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
                
            });
            setTeamMembers([])
            setData(team?.data?.data)
        }

        FetchData()
        
    },[state])

    return (
        <div>
            <div>
                <h3>{state?.shift} Shift</h3>
                <Paper elevation={3} className="scrollbar" style={{borderRadius:'10px',marginTop:'20px',heignt:'auto',overflow:'auto'}}>
                <h3>Project Lead</h3>
                    <table className="table table-hover">

                        <thead style={{ position: 'sticky',height:'60px',top: '0', zIndex: '999', background: 'white' }}>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Project Leader</th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Team</th>
                                <th scope="col">Team Name</th>
                                <th scope="col">Shift</th>
                                <th scope="col">Section Completed</th>
                                <th scope="col">Integration Done</th>
                                <th scope="col">completion Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Data?.length > 0 ? Data?.map(({_id,projectName,team,teamName,Shift,PeojectLeader})=>(
                                <tr onClick={(e)=>handleTeamSelection(e,_id)} style={{height:'60px'}} key={_id}>
                                    <th scope="row">
                                        <img src={PeojectLeader?.Id?.avatar?.url?PeojectLeader?.Id?.avatar?.url:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                                    </th>
                                    <td>{`${PeojectLeader?.Id?.firstName} ${PeojectLeader?.Id?.lastName}`}</td>
                                    <td>{projectName}</td>
                                    <td>{team}</td>
                                    <td>{teamName}</td>
                                    <td>{Shift + 'shift'}</td>
                                    <td>{PeojectLeader?.isSectionCompleted?<span style={{color:'green'}}>Completed</span>:<span style={{color:'red'}}>Pending</span>}</td>
                                    <td>{PeojectLeader?.isIntegrationDone?<span style={{color:'green'}}>Completed</span>:<span style={{color:'red'}}>Pending</span>}</td>
                                    <td>{PeojectLeader?.completionDate?<span style={{color:'green'}}>{PeojectLeader?.completionDate}</span>:<span style={{color:'red'}}>Pending</span>}</td>
                                </tr>)):<tr style={{fontWeight:'bold'}}>User not found</tr>}
                        </tbody>

                    </table>

                </Paper>
            </div>
            {teamMembers?.length > 0 &&<div style={{marginTop:'20px'}}>
                    <h3>Team Members</h3>
                    <Paper elevation={3} className="scrollbar" style={{borderRadius:'10px',marginTop:'20px',maxHeight:'450px',minHeight:'300px',overflow:'auto'}}>
                    
                    <table className="table table-hover">

                        <thead style={{ position: 'sticky',height:'60px',top: '0', zIndex: '999', background: 'white' }}>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Employee Id</th>
                                <th scope="col">Level</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Section Completed</th>
                                <th scope="col">Integration Done</th>
                                <th scope="col">completion Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {teamMembers?.map(({_id,Id:{avatar,firstName,lastName,employeeId,designationLevel,designation},isSectionCompleted,isIntegrationDone,completionDate})=>(
                                console.log('isIntegrationDone',isIntegrationDone),
                                <tr style={{height:'60px'}} key={_id}>
                                    <th scope="row">
                                        <img src={avatar?.url?avatar?.url:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                                    </th>
                                    <td>{`${firstName} ${lastName}`}</td>
                                    <td>{employeeId}</td>
                                    <td>{designationLevel}</td>
                                    <td>{designation}</td>
                                    <td>{isSectionCompleted?<span style={{color:'green'}}>Completed</span>:<span style={{color:'red'}}>Pending</span>}</td>
                                    <td>{isIntegrationDone?<span style={{color:'red'}}>Pending</span>:<span style={{color:'green'}}>Completed</span>}</td>
                                    <td>{completionDate?<span style={{color:'green'}}>{completionDate}</span>:<span style={{color:'red'}}>Pending</span>}</td>
                                </tr>))}
                        </tbody>

                    </table>

                </Paper>
                </div>}
        </div>
    );
}

export default Shifts;