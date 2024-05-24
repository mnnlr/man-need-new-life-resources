import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"


import '../../styles/Analytics.css'

const Analytics = () => {
    const navigate = useNavigate();
    return (
        <div style={{marginTop:'20px',marginLeft:'20px'}}>
            {/* <div className="main-button" >
                <div className="each-main-button" onClick={()=>navigate('/analitics')} style={{width:'300px',height:'50px',cursor:'pointer'}}>
                    <SP_Card title="Dashboard Overview" BG_Color="#6610f2" Color="white" B_Radius="7px"/>
                </div>
                <div className="each-main-button" onClick={()=>navigate('report')} style={{width:'300px',height:'50px',cursor:'pointer'}}>
                    <SP_Card title="Detailed Reports" BG_Color="#d63384" Color="white" B_Radius="7px" />
                </div>
                <div className="each-main-button" onClick={()=>navigate('conversion-track')} style={{width:'300px',height:'50px',cursor:'pointer'}}>
                    <SP_Card title="Conversion Tracking" BG_Color="#0d6efd" Color="white" B_Radius="7px" />
                </div>
            </div> */}
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Analytics;