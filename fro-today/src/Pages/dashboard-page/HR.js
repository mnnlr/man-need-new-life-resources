import { useNavigate } from "react-router-dom";
import SP_Card from "../../components/dashboard-component/SP_Card";

const HR = () => {
    const navigate = useNavigate();
    return (
        <div style={{padding:'20px'}}>
            <div style={{display:'flex',justifyContent:'flex-start',flexWrap:'wrap',gap:'20px'}}>
                <div style={{width:'250px',height:'100px',cursor:'pointer'}}>
                    <SP_Card title='Total Employee' content='100' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                </div>
                <div style={{width:'250px',height:'100px',cursor:'pointer'}}>
                    <SP_Card title='Present' content='80' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                </div>
                <div style={{width:'250px',height:'100px',cursor:'pointer'}}>
                    <SP_Card title='Absent' content='20' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                </div>
                <div onClick={()=>navigate('/attandancelog')} style={{width:'200px',height:'100px',cursor:'pointer'}}>
                    <SP_Card title='See All' content='20' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                </div>
            </div>
            <div style={{display:'flex',padding:'20px',width:'100%',justifyContent:'center',flexWrap:'wrap',gap:'20px',marginTop:'40px'}}>
                <div style={{display:'flex',justifyContent:'flex-start',flexWrap:'wrap',gap:'20px'}}>
                    <div onClick={()=>navigate('/attandance')} style={{width:'300px',height:'150px',cursor:'pointer'}}>
                        <SP_Card title='Attendence' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                    </div>
                    <div onClick={()=>navigate('/trackleave')} style={{width:'300px',height:'150px',cursor:'pointer'}}>
                        <SP_Card title='Track Leave' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                    </div>
                    <div onClick={()=>navigate('/holidays')} style={{width:'300px',height:'150px',cursor:'pointer'}}>
                        <SP_Card title='Holidays' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                    </div>
                    <div onClick={()=>navigate('/noticeboard')} style={{width:'300px',height:'150px',cursor:'pointer'}}>
                        <SP_Card title='Notice Board' BG_Color='#f5f5f5' Color='black' B_Radius='10px'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HR;