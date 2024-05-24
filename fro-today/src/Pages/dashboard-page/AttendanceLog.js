import useFetch from "../../hooks/fetchHook";
import { Paper } from "@mui/material";

const AttendanceLog = () => {

    const [{apiData}] = useFetch('api/v1/performance/attendance');
    console.log('attendance : ',apiData)
    return (
        <div style={{padding:'20px'}}>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingRight:'20px'}}>
                <h3>
                    Presenties
                </h3>
            </div>
            <Paper elevation={3} className="scrollbar" style={{borderRadius:'10px',marginTop:'20px',maxHeight:'450px',minHeight:'300px',overflow:'auto'}}>
                
                <table className="table table-hover">

                    <thead style={{ position: 'sticky',height:'60px',top: '0', zIndex: '999', background: 'white' }}>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Employee ID</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Level</th>
                            <th scope="col">Presenties</th>
                            <th scope="col">Total Working Hours</th>
                        </tr>
                    </thead>

                    <tbody>
                        {apiData?.attendance?.length > 0 ? apiData?.attendance?.map(({_id,totalWorkingHours,employee:{employeeId,designationLevel,firstName,lastName,avatar,designation}})=><tr key={_id}>
                            <th scope="row">
                                <img src={avatar?.url?avatar?.url:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                            </th>
                            <td>{`${firstName} ${lastName}`}</td>
                            <td style={{minWidth:'50px',maxWidth:'100px',overflow:'hidden',height:'60px'}}>{employeeId}</td>
                            <td>{designation}</td>
                            <td>{designationLevel}</td>
                            <td style={{color:'green'}}>{totalWorkingHours?'Present':'Absent'}</td>
                            <td>{totalWorkingHours}</td>
                        </tr>):<tr style={{fontWeight:'bold'}}>User not found</tr>}
                    </tbody>

                </table>

            </Paper>
            {/* <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingRight:'20px',marginTop:'40px'}}>
                <h3>
                Absenties
                </h3>
            </div>
            <Paper elevation={3} className="scrollbar" style={{borderRadius:'10px',marginTop:'20px',minHeight:'300px',maxHeight:'450px',overflow:'auto'}}>
                
                <table className="table table-hover">

                    <thead style={{ position: 'sticky',height:'60px', top: '0', zIndex: '999', background: 'white' }}>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Employee ID</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Presenties</th>
                        </tr>
                    </thead>

                    <tbody>
                        {apiData?.employee?.length > 0 ? apiData?.employee.slice(apiData?.employee?.length/2,apiData?.employee?.length)?.map(({employeeId,firstName,lastName,avatar,designation})=><tr key={employeeId}>
                            <th scope="row">
                                <img src={avatar?.url?avatar?.url:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                            </th>
                            <td>{`${firstName} ${lastName}`}</td>
                            <td style={{minWidth:'50px',maxWidth:'100px',overflow:'hidden',height:'60px'}}>{employeeId}</td>
                            <td>{designation}</td>
                            <td style={{color:'red'}}>Absent</td>
                        </tr>):<tr style={{fontWeight:'bold'}}>User not found</tr>}
                    </tbody>

                </table>

            </Paper> */}
        </div>
    )
}

export default AttendanceLog;