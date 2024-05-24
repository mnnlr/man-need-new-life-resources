import { useState,useEffect } from "react"
import SP_Card from "../../components/dashboard-component/SP_Card"
import UserData from "../../fakeData/UserData";
import UserGeneralData from "../../fakeData/UserGeneralData";
import Paper from '@mui/material/Paper';

import SearchSomething from "../../components/dashboard-component/Search";

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EditIcon from '@mui/icons-material/Edit';
import useFetch from "../../hooks/fetchHook";
import DialogBox from "../../components/dashboard-component/Dialog";
import SelectItem from "../../components/dashboard-component/Select";
import axiosInstance from "../../customAxios/authAxios";

const General = () => {
    const [selectedUserId,setSelectedUserId] = useState('')
    const [{apiData:userData},,setDataParams] = useFetch('user');
    const [{apiData:userPreferences},,setPreferenceParams] = useFetch(`user/${selectedUserId}`);
    const [{apiData:userAllPreferences},,setUserAllPreferencesParams] = useFetch(`preference`);
    const [preferenceId,setPreferenceId] = useState('')
    console.log(`userPreferences`,userPreferences)

    const changeStack = async()=>{
        try {
            const {data} = await axiosInstance.put(`http://localhost:7000/preference/changestack/${preferenceId}`,{stackId:selectedUserId})

            setPreferenceParams('')
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(()=>{
        if(UserData&&!selectedUserId){
            setSelectedUserId(UserData[1]?.id)
        }
    },[UserData])
    return (
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridGap:'10px'}}>
            
            <div style={{display:'grid',gridTemplateColumns:'1fr',gridTemplateRows:'auto',gridGap:'10px',marginTop:'20px',paddingRight:'20px'}}>

                <div>
                    <Paper elevation={3} style={{display:'flex',alignItems:'center',gap:'20px',padding:'20px',paddingBottom:'0px',borderRadius:'10px'}}>
                        <div style={{height:'100%'}}>
                            <img src={userPreferences?.data?.img} style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                            <p style={{color:'green',fontWeight:'bold'}}>{userPreferences?.data?.role}</p>
                        </div>
                        <div style={{height:'100%'}}>
                            <div>
                                <h5>{userPreferences?.data?.username}</h5>
                            </div>
                            <div>
                                <h6 style={{color:'#d63384'}}>ID {userPreferences?.data?.id}</h6>
                            </div>
                        </div>
                    </Paper>
                </div>

                <div style={{display:'grid',gridTemplateColumns:'1fr',gridTemplateRows:'auto',gridGap:'10px',marginTop:'20px'}}>
                    <Paper elevation={3} style={{display:'flex',flexDirection:'column',gap:'5px',padding:'20px',paddingBottom:'0px',borderRadius:'10px'}}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h5>{userPreferences?.data?.title?.toUpperCase()}</h5>
                            <DialogBox
                                 iconSize="16px" 
                                 iconColor="blue" 
                                 content={
                                     <div style={{padding:'20px',borderRadius:'7px',backgroundColor:'white'}}>
                                         <div style={{display:'flex',flexDirection:'column',alignItems:'center',minWidth:'300px',width:'auto',minHeight:'100px',height:'auto',}}>
                                             <SelectItem setValue={setPreferenceId} value={preferenceId}  title='Select Stack'  items={userAllPreferences?.preferences?.map(({_id,title}) => ({value:_id,name:title}))} />
                                         </div>
                                     </div>
                                 }
                                 saveButton={                                                
                                     <div onClick={changeStack} style={{marginLeft:'70%'}}>
                                         <button style={{borderRadius:'7px',minWidth:'80px',width:'auto',backgroundColor:'green',color:'white',border:'none',cursor:'pointer'}}>Save</button>
                                     </div>
                                 }
                            />
                            {/* <span><EditIcon style={{fontSize:'16px',cursor:'pointer',color:userPreferences?.data?.theme?.toLowerCase()==='dark'?"white":"blue"}} /> </span> */}
                        </div>
                        <p style={{color:'gray',lineHeight:'20px',fontSize:'15px',fontWeight:'lighter'}}>{userPreferences?.data?.text}</p>
                        <p>Time Zone : {userPreferences?.data?.timeZone}</p>
                    </Paper>
                </div>
            </div>
            <div>
                {/* <div style={{float:'right'}}>
                    <SearchSomething placeholder="Search By Name or ID" Style={{borderRadius:'7px',width:'300px',height:'40px',border:'1px solid rgba(237, 231, 225)',outline:'1px solid blue'}} />
                </div> */}
                <div>
                    <Paper elevation={3} className="scrollbar" style={{marginTop:'20px',height:'370px',overflow:'auto',borderRadius:'7px'}} >
                        <table className="table table-hover">
                            <thead style={{ position: 'sticky',height:'50px', top: '0', zIndex: '999', background: 'white' }}>
                                <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">User ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData?.users?.map(({_id,id,username,img})=><tr key={_id} onClick={()=>setSelectedUserId(_id)} style={{cursor:'pointer'}}>
                                    <th scope="row">
                                        <img src={img?img:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt='' style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                                    </th>
                                    <td>{username}</td>
                                    <td>{id}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default General