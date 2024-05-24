import { useState,useEffect } from 'react';

import SelectItem from '../../components/dashboard-component/Select';
import { Paper } from "@mui/material";
import useFetch from '../../hooks/fetchHook';

const Attendance = () => {

    const [selectedValue, setSelectedValue] = useState('today');

    
    const [{apiData:performance},,setParams] = useFetch('api/v1/performance/rank');

    useEffect(()=>{
        setParams({period:selectedValue})
    },[selectedValue])


    return (
        <div style={{padding:'20px'}}>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingRight:'20px'}}>
                <h3>
                    Top Performing Employees
                </h3>
                <div>
                    <SelectItem 
                        value={selectedValue}
                        setValue={setSelectedValue}
                        default={selectedValue}
                        title=''
                        selectedValue={selectedValue} 
                        items={
                                [
                                    {name:'Today',value:'today'},
                                    {name:'This Week',value:'week'},
                                    {name:'This Month',value:'month'},
                                    {name:'This Year',value:'year'},
                                ]
                            }
                    />
                </div>
            </div>
            <Paper elevation={3} className="scrollbar" style={{borderRadius:'10px',marginTop:'20px',maxHeight:'450px',minHeight:'300px',overflow:'auto'}}>
                
                <table className="table table-hover">

                    <thead style={{ position: 'sticky',height:'60px',top: '0', zIndex: '999', background: 'white' }}>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">User ID</th>
                            <th scope="col">Level</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Total Working Hour</th>
                        </tr>
                    </thead>

                    <tbody>
                        {performance?.performance?.length > 0 ? performance?.performance?.map(({id,totalWorkingHour,employeeDocId:{avatar,firstName,lastName,designationLevel,designation,employeeId}})=><tr key={id}>
                            <th scope="row">
                                <img src={avatar?.url?avatar?.url:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                            </th>
                            <td>{`${firstName} ${lastName}`}</td>
                            <td>{employeeId}</td>
                            <td>{designationLevel}</td>
                            <td>{designation}</td>
                            <td style={{color:'green'}}>{totalWorkingHour}</td>
                        </tr>):<tr style={{fontWeight:'bold'}}>User not found</tr>}
                    </tbody>

                </table>

            </Paper>
            
        </div>
    )
}

export default Attendance;