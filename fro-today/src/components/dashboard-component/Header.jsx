import {useNavigate} from 'react-router-dom';
import GroupIcon from '@mui/icons-material/Group';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from '@mui/material/Avatar';

const Header = ({sideBarOpen})=> {
    const navigate = useNavigate()
    return (
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'100%',backgroundColor:'whitesmoke',paddingLeft:'20px',paddingRight:'20px'}}>
            <div onClick={()=>navigate('/')} style={{color:'gray',cursor:'pointer'}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuj2D__NYP9eCL1AikS0270X19Wa-hlv9NCGXfhYjRw&s" alt="" style={{width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'whitesmoke'}} />
            </div>
            <div>
                <input type="text" placeholder="Search" style={{width:'300px',height:'30px',borderRadius:'5px',border:'1px solid black'}} />
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                <p onClick={()=>navigate('users')} style={{color:'gray',cursor:'pointer'}}>
                   <GroupIcon/> 
                </p>
                <p onClick={()=>navigate('content')} style={{color:'gray',cursor:'pointer'}}>
                    <FolderCopyIcon />
                </p>
                <p onClick={()=>navigate('settings')} style={{color:'gray',cursor:'pointer'}}>
                    <SettingsIcon />
                </p>
                <p onClick={()=>navigate('analitics')} style={{color:'gray',cursor:'pointer'}}>
                    <AnalyticsIcon />
                </p>
                <p onClick={()=>navigate('profile')} style={{color:'gray',cursor:'pointer'}} style={{color:'gray',cursor:'pointer'}}>
                    <Avatar src="/broken-image.jpg" style={{width:'40px',height:'40px'}} />
                </p>
                <p style={{color:'gray',cursor:'pointer'}}>
                    <MenuIcon />
                </p>
            </div>
        </div>
    )

}

export default Header;