import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SP_Card from "../../components/dashboard-component/SP_Card"

const Noticeboard = () => {
    const navigate = useNavigate();
    return (
        <div  style={{padding:'20px'}}>
            <div style={{display:'flex',justifyContent:'flex-start',flexWrap:'wrap',gap:'20px'}}>
                <div onClick={()=>navigate('shift',{state:{shift:'morning'}})} style={{width:'230px',height:'120px',cursor:'pointer'}}>
                    <SP_Card title='Morning Shift' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                </div>
                <div onClick={()=>navigate('shift',{state:{shift:'day'}})} style={{width:'230px',height:'120px',cursor:'pointer'}}>
                    <SP_Card title='Day Shift' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                </div>
                <div onClick={()=>navigate('shift',{state:{shift:'night'}})} style={{width:'230px',height:'120px',cursor:'pointer'}}>
                    <SP_Card title='Night Shift' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                </div>
                <div onClick={()=>navigate('create-team')} style={{width:'230px',height:'120px',cursor:'pointer'}}>
                    <SP_Card title='Create Team' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                </div>
            </div>
            <div style={{marginTop:'20px'}}>
                <Outlet />
            </div>
        </div>
    );
}

export default Noticeboard;