import { useState } from "react"
import { Button, TextField } from "@mui/material"
import {Paper} from "@mui/material"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import SelectItem from "../../components/dashboard-component/Select"
import axios from "axios"
import { useAlert } from "../../contextData/AlertProviderContext"

const CraeteTeam = () => {
    const {setAlert} = useAlert()
    const [employeeId,setEmployeeId] = useState('')
    const [team,setTeam] = useState('')
    const [projectName,setProjectName] = useState('')
    const [teamMembers,setTeamMembers] = useState([])
    const [teamLeader,setTeamLeader] = useState('')
    const [teamName,setTeamName] = useState('')
    const [Shift,setShift] = useState('')

    const addTeamMember = async(e) => {
        try {
            e.preventDefault()
            if(employeeId === '') return setAlert({open:true,message:'Please Enter Employee ID',type:'error'});
            const {data} = await axios.get(`http://localhost:8000/api/v1/employee/empId/${employeeId}`,
            {
                withCredentials:true,
                headers:{
                    contentType:"application/json"
                }
            })
            setEmployeeId('')
            setTeamMembers((prev)=>[...prev,data?.employee])
            console.log(data)
        } catch (error) {
            setAlert({open:true,message:error.response.data.message,type:'error'})
        }
        
    }

    const handleRemove = (e,empId) => {
        e.preventDefault()
        setTeamMembers((prev)=>prev.filter((member)=>member.employeeId !== empId))
    }

    const handleTeamLeader = async(e) => {
        try {
            e.preventDefault()
            if(employeeId === '') return setAlert({open:true,message:'Please Enter Employee ID',type:'error'});
            const {data} = await axios.get(`http://localhost:8000/api/v1/employee/empId/${employeeId}`,
            {
                withCredentials:true,
                headers:{
                    contentType:"application/json"
                }
            })
            setEmployeeId('')
            setTeamLeader(data?.employee)
            console.log(data)
        } catch (error) {
            setAlert({open:true,message:error.response.data.message,type:'error'})
        }
    }

    const removeTeamLeader = (e) => {
        e.preventDefault()
        setTeamLeader('')
    }

    const createTeam = async(e) => {

        try {

            e.preventDefault()

            if(teamMembers.length === 0) return setAlert({open:true,message:'Please Add Members',type:'error'});
            if(team === '') return setAlert({open:true,message:'Please Select Team',type:'error'});
            if(Shift === '') return setAlert({open:true,message:'Please Select Shift',type:'error'});
            if(projectName === '') return setAlert({open:true,message:'Please Enter Project Name',type:'error'});
            if(teamName === '') return setAlert({open:true,message:'Please Enter Team Name',type:'error'});
            if(teamLeader === '') return setAlert({open:true,message:'Please Add Team Leader',type:'error'});
            
            const teamData = {
                teamName,
                projectName,
                teamLeader,
                teamMembers,
                team,
                Shift
            }

            const {data} = await axios.post('http://localhost:8000/team',teamData,
            {
                withCredentials:true,
                headers:{
                    contentType:"application/json"
                }
            })
            setAlert({open:true,message:data.message,type:'success'})
            setTeamMembers([])
            setTeam('')
            setShift('')
            setProjectName('')
            setTeamName('')
        }
        catch (error) {
            setAlert({open:true,message:error.response.data.message,type:'error'})
        }
    }


    return (
            <div>
                <div style={{display:'flex'}}>
                    <div style={{display:'flex'}}>
                        {/*Add Members*/}
                        <TextField onChange={(e)=>setEmployeeId(e.target.value)} required={true} value={employeeId} id="outlined-basic" label="Add Members" variant="outlined" />
                        <Button onClick={addTeamMember} variant="contained" color="primary" type="submit" sx={{m:1,minWidth:140,height:'100%'}} >
                            <span>Add Member</span>
                        </Button>
                    </div>
                    <div style={{display:'flex'}}>
                        {/*Add Members*/}
                        <TextField onChange={(e)=>setEmployeeId(e.target.value)} required={true} value={employeeId} id="outlined-basic" label="Add Members" variant="outlined" />
                        <Button onClick={handleTeamLeader} variant="contained" color="primary" type="submit" sx={{m:1,minWidth:140,height:'100%'}} >
                            <span>Add Member</span>
                        </Button>
                    </div>
                </div>
                <form onSubmit={createTeam}>

                    <div style={{display:'flex',flexWrap:'wrap',gap:'20px',marginTop:'20px'}}>
                        <div>
                            <TextField onChange={(e)=>setProjectName(e.target.value)} value={projectName} id="outlined-basic" label="Project Name" variant="outlined" />
                        </div>
                        <div>
                            <TextField onChange={(e)=>setTeamName(e.target.value)} value={teamName} id="outlined-basic" label="Team Name" variant="outlined" />
                        </div>
                        <div>
                            <SelectItem title="Select Team" MinWidth={200} required={true} wantStanderd={false} items={[{value:"Team 1",name:"Team 1"},{value:"Team 2",name:"Team 2"}]} value={team} setValue={setTeam} />
                        </div>
                        <div>
                            <SelectItem title="Select Shift" MinWidth={200} required={true} wantStanderd={false} items={[{value:"morning",name:"Morning Shift"},{value:"day",name:"Day Shift"},{value:"night",name:"Night Shift"}]} value={Shift} setValue={setShift} />
                        </div>
                        <div>
                            <Button variant="contained" color="primary" type="submit" sx={{m:1,minWidth:140,height:'100%'}} >
                                <span>Create Team</span>
                            </Button>
                        </div>
                    </div>
                </form>

                {teamLeader?._id&&<Paper elevation={3} className="scrollbar" style={{borderRadius:'10px',marginTop:'20px',height:'auto',overflow:'auto'}}>
                
                    <table className="table table-hover">

                        <thead style={{ position: 'sticky',height:'60px',top: '0', zIndex: '999', background: 'white' }}>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">User ID</th>
                                <th scope="col">Level</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">
                                    <img src={teamLeader?.img?teamLeader?.img:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                                </th>
                                <td>{`${teamLeader?.firstName} ${teamLeader?.lastName}`}</td>
                                <td>{teamLeader?.employeeId}</td>
                                <td>{teamLeader?.designationLevel}</td>
                                <td onClick={removeTeamLeader} ><RemoveCircleOutlineIcon style={{color:'red'}}/></td>
                            </tr>
                        </tbody>

                    </table>

                </Paper>}
            {teamMembers?.length > 0 && <Paper elevation={3} className="scrollbar" style={{borderRadius:'10px',marginTop:'20px',maxHeight:'450px',minHeight:'300px',overflow:'auto'}}>
                
                <table className="table table-hover">

                    <thead style={{ position: 'sticky',height:'60px',top: '0', zIndex: '999', background: 'white' }}>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">User ID</th>
                            <th scope="col">Level</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {teamMembers?.map(({_id,employeeId,firstName,lastName,img,designationLevel})=><tr key={_id}>
                            <th scope="row">
                                <img src={img?img:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                            </th>
                            <td>{`${firstName} ${lastName}`}</td>
                            <td>{employeeId}</td>
                            <td>{designationLevel}</td>
                            <td onClick={(e)=>handleRemove(e,employeeId)} ><RemoveCircleOutlineIcon style={{color:'red'}}/></td>
                        </tr>)}
                    </tbody>

                </table>

            </Paper>}
        </div>
    )
}

export default CraeteTeam