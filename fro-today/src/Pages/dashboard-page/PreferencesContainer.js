import { useState,useEffect } from "react"
import useFetch from "../../hooks/fetchHook";
import SP_Card from "../../components/dashboard-component/SP_Card"
import UserData from "../../fakeData/UserData";
import UserPreferences from "../../fakeData/UserPreferences";
import Paper from '@mui/material/Paper';

// import SearchSomething from "../components/Search";

// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import SelectItem from "../../components/dashboard-component/Select";
import Dialog from "../../components/dashboard-component/Dialog";
import axiosInstance from "../../customAxios/authAxios";

const PreferencesContainer = () => {

    const [selectedUserId,setSelectedUserId] = useState('')
    const [{apiData:userData},,setDataParams] = useFetch('user');
    const [{apiData:allLanguages}] = useFetch('language');
    const [{apiData:userPreferences},,setPreferenceParams] = useFetch(`user/${selectedUserId}`);
    const [selectedLanguageId,setSelectedLanguageId] = useState('')
    const [selectedTheme,setSelectedTheme] = useState('')

    const saveLanguage = async()=>{
        try {
            const {data} = await axiosInstance.put(`http://localhost:7000/preference/changelanguage/${selectedLanguageId}`,{userId:selectedUserId})
            setSelectedLanguageId('')
            setPreferenceParams('')
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    const saveTheme = async()=>{
        try {
            const {data} = await axiosInstance.put('http://localhost:7000/preference/theme',{id:selectedUserId,theme:selectedTheme})
            setSelectedTheme('')
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
            {/* <Dialog /> */}
            <div style={{display:'grid',gridTemplateColumns:'1fr',gridTemplateRows:'auto',gridGap:'10px',marginTop:'20px',paddingRight:'20px'}}>

                <div>
                    <Paper elevation={3} style={{display:'flex',alignItems:'center',gap:'20px',padding:'20px',paddingBottom:'0px',borderRadius:'10px'}}>
                        <div style={{height:'100%'}}>
                            <img src={userPreferences?.data?.img} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
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

                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'1fr auto',gridGap:'10px',marginTop:'20px'}}>
                    {userPreferences?.data?.preferedLanguages?.map(({title})=>
                        <div style={{position:'relative'}}>
                            <Paper elevation={3} style={{display:'flex',justifyContent:'center',color:'white',alignItems:'center',minHeight:'40px',minWidth:'50px',height:'auto',width:'auto',backgroundColor:'green'}} >
                                {title}
                            </Paper>
                            <div style={{position:'absolute',top:'5px',right:'5px'}}>
                                <Dialog 
                                    iconSize="16px" 
                                    iconColor="white" 
                                    content={
                                        <div style={{padding:'20px',borderRadius:'7px',backgroundColor:'white'}}>
                                            <div style={{display:'flex',flexDirection:'column',alignItems:'center',minWidth:'300px',width:'auto',minHeight:'100px',height:'auto',}}>
                                                <SelectItem value={selectedLanguageId} setValue={setSelectedLanguageId} title='Select Language'  items={allLanguages?.languages?.map(({id,title}) => ({value:id,name:title})) } />
                                            </div>
                                        </div>
                                    }
                                    saveButton={                                                
                                        <div onClick={saveLanguage} style={{marginLeft:'70%'}}>
                                            <button style={{borderRadius:'7px',minWidth:'80px',width:'auto',backgroundColor:'green',color:'white',border:'none',cursor:'pointer'}}>Save</button>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    )}
                    <SP_Card 
                        title={<h5>Personalize Theme</h5>} 
                        content={
                            <p style={{display:'flex',gap:'20px'}}>
                                <span style={{color:userPreferences?.data?.theme?.toLowerCase() === "dark" ? "white":'black'}}>
                                    {userPreferences?.data?.theme}
                                </span>
                                <span>
                                    <Dialog 
                                        iconSize="16px" 
                                        iconColor={userPreferences?.data?.theme?.toLowerCase()==='dark'?"white":"blue"} 
                                        content={
                                            <div style={{padding:'20px',borderRadius:'7px',backgroundColor:'white'}}>
                                                <div style={{display:'flex',flexDirection:'column',alignItems:'center',minWidth:'300px',width:'auto',minHeight:'100px',height:'auto',}}>
                                                    <SelectItem value={selectedTheme} setValue={setSelectedTheme} title='Select Theme'  items={[{value:'dark',name:'Dark'},{value:'light',name:'Light'}]} />
                                                </div>
                                            </div>
                                        }
                                        saveButton={                                                
                                            <div onClick={saveTheme} style={{marginLeft:'70%'}}>
                                                <button style={{borderRadius:'7px',minWidth:'80px',width:'auto',backgroundColor:'green',color:'white',border:'none',cursor:'pointer'}}>Save</button>
                                            </div>
                                        }
                                    />
                                </span>
                            </p>
                        } 
                        BG_Color={userPreferences?.data?.theme?.toLowerCase()==='dark'?"rgba(0,0,0,0.8)":'white'} Color={userPreferences?.data?.theme?.toLowerCase()==='dark'?"white":'black'} B_Radius="10px"/>
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
                                        <img src={img?img:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
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

export default PreferencesContainer