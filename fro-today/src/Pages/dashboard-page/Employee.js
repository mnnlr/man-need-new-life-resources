import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const Employee = () => {
    const navigate = useNavigate();
    return (
        <div style={{padding:'20px'}}>
            <h1>Employee</h1>
            <Button onClick={()=>navigate('/apply-leave')} variant="contained" color="primary">Apply Leave</Button>
        </div>
    )
}

export default Employee;