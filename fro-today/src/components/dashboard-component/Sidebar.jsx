import { useNavigate } from 'react-router-dom';
import SideBarFakeData from '../../fakeData/SideBarFakeData';
import CloseIcon from '@mui/icons-material/Close';
import LogOut from '../LogOut';

const SideBar = ({setSideBarOpen,sideBarOpen})=> {
    const navigate = useNavigate();
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <ul style={{display:'flex',flexDirection:'column',margin:0,top:0,padding:0,backgroundColor:'#212631',width:'100%',height:'100vh',color:'white',listStyle:'none'}}>
                <li  
                    style={{display:'flex',alignItems:'center',fontWeight:'bold',width:'100%',backgroundColor:'#212631',borderBottom:'1px solid white',height:'60px'}}>
                        <CloseIcon onClick={()=>setSideBarOpen((prev)=>!prev)} style={{cursor:'pointer',marginLeft: 'auto', marginRight: '10px',color:'gray' }}/>
                    </li>
                <div style={{paddingLeft:'20px',marginTop:'20px'}}>
                    {SideBarFakeData.map(({id,name,path,Icon})=>
                        <li onClick={()=>navigate(path)} key={id} style={{display:'flex',alignItems:'center',gap:'10px',height:'60px',cursor:'pointer',fontWeight:'bold'}}>
                            <div>
                                {Icon}
                            </div>
                            <div>
                                {sideBarOpen&&name}
                            </div>
                        </li>
                    )}
                </div>
                <LogOut />
            </ul>
        </div>
    )

}

export default SideBar;