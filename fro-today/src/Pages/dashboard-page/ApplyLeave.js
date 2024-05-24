import { useState } from "react"
import axios from 'axios'
import '../../styles//applyleave.css'
import { useAlert } from "../../contextData/AlertProviderContext"

import { Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import SelectItem from "../../components/dashboard-component/Select";

const leaveTypeList=[
    {
        value:"casual",
        name:"Casual Leave"
    },
    {       
        value:"sick",
        name:"Sick Leave"
    }
]

const ApplyLeave=()=>{
    const {setAlert} = useAlert()
    const [leaveType,setLeaveType]=useState(leaveTypeList[0].id)
    const [leaveDaysType,setLeaveDaysType]=useState("oneDay")
    const [userId,setUserId]=useState('')
    const [oneLeaveDate,setOneLeaveDate]=useState("")
    const [leaveStartDate,setLeaveStartDate]=useState("")
    const [leaveEndDate,setLeaveEndDate]=useState("")
    const [leaveReason,setReason]=useState("")
    

    // const onChangeLeaveType=(event)=>{
    //     setLeaveType(event.target.value)
    // }

    const oneOrMoreDays=leaveDaysType==="oneDay"

    const applyLeave=(event)=>{
        event.preventDefault();
        console.log(leaveType,oneLeaveDate,leaveStartDate,leaveEndDate,leaveReason)

        axios.post("http://localhost:8000/leave",{
            userId:userId,
            typeOfLeave:leaveType,
            startDate:leaveStartDate,
            endDate:leaveEndDate,
            reason:leaveReason
        },{
            headers:{
                withCredentials:true,
                contentType:"application/json"
            }
        }).then(response=>{
            setAlert({open:true,message:response.data.message,type:'success'})
        }).catch(error=>{
            setAlert({open:true,message:error.response.data.message,type:'error'})
        })

    }

    return(
        <div style={{padding:'20px'}}>
            <form onSubmit={applyLeave} >
                <h3>Leave Form</h3>
                <div style={{display:'flex',gap:'20px'}}>
                    <div>
                        <TextField type="text" title="leave type" id="outlined-basic" label="User Id" variant="outlined" onChange={(e)=>setUserId(e.target.value)} value={userId} />
                    </div>

                    <div>
                        <SelectItem value={leaveType} wantStanderd={false} required={true} items={leaveTypeList} setValue={setLeaveType} value={leaveType} />
                    </div>
                </div>

                <div className="one-more-days">
                    <div >
                        <input checked={oneOrMoreDays} onChange={()=>{setLeaveDaysType("oneDay")}} id="oneDay" className="input-radio" type="radio" name="leave days"/>
                        <label className="label-style-leave" htmlFor="oneDay">one Day</label>
                    </div>
                    <div>
                        <input onChange={()=>{setLeaveDaysType("moreDays")}} id="moreDays" className="input-radio" type="radio" name="leave days"/>
                        <label className="label-style-leave" htmlFor="moreDays">More Than One Day</label>
                    </div>
                </div>
                {oneOrMoreDays&&<div className="single-day-leave">
                    <label htmlFor="singleDay" className="label-style-leave">Select Date</label>
                    <input  onChange={(event)=>{setOneLeaveDate(event.target.value)}} type="date" className="input-date" /> 
                </div>}
                {!oneOrMoreDays&&<div style={{display:'flex',gap:'20px'}}>
                    <div>
                        <div>
                            <label className="label-style-leave">From</label>
                        </div>
                        <div>
                            <input onChange={(event)=>{setLeaveStartDate(event.target.value)}} className="input-date" type="date"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="label-style-leave">To</label>
                        </div>
                        <div>
                            <input onChange={(event)=>{setLeaveEndDate(event.target.value)}} className="input-date" type="date"/>
                        </div>
                    </div>
                </div>}
                <div style={{marginTop:'20px'}}>
                    <div>
                        <label className="reason-label">Enter the reason</label>
                    </div>
                    <div style={{width:'500px'}}>
                        <textarea onChange={(event)=>{setReason(event.target.value)}} style={{width:'100%'}} type="text" placeholder="Enter reason..." />
                    </div>
                    <div>
                        <Button variant="contained" color="primary" type="submit" >
                            <span>Apply Leave</span>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ApplyLeave;