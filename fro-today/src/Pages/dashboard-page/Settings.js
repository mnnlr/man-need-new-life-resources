import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import SP_Card from "../../components/dashboard-component/SP_Card"

const Settings = () => {

    const navigate = useNavigate();

    return (
        <div style={{marginTop:'20px',marginLeft:'20px'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gridGap:'10px'}}>
                <div onClick={()=>navigate('/settings')} style={{width:'300px',height:'150px',cursor:'pointer'}}>
                    <SP_Card title="General Settings" BG_Color="#6610f2" Color="white" B_Radius="10px"/>
                </div>
                <div onClick={()=>navigate('security')} style={{width:'300px',height:'150px',cursor:'pointer'}}>
                    <SP_Card title="Security" BG_Color="#d63384" Color="white" B_Radius="10px" />
                </div>
                <div onClick={()=>navigate('preferences')} style={{width:'300px',height:'150px',cursor:'pointer'}}>
                    <SP_Card title="Preferences" BG_Color="#0d6efd" Color="white" B_Radius="10px" />
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Settings