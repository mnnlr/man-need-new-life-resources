import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import DialogBox from "../../components//dashboard-component/Dialog";
import useFetch from "../../hooks/fetchHook";

import { Paper } from "@mui/material";

const ConfigutreRole = () => {

    const {id} = useParams();
    
    const [{apiData:userData}] = useFetch(`user/${id}`);

    return (
        <div>
            <div style={{display:'grid',gridTemplateColumns:'1fr',gridTemplateRows:'auto',gridGap:'10px',marginTop:'20px',marginRight:'50px'}}>
                <Paper elevation={3} style={{display:'flex',flexDirection:'column',gap:'5px',padding:'20px',paddingBottom:'0px',borderRadius:'10px'}}>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                            <img src={userData?.data?.img} style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                            <h5>{userData?.data?.username?.toUpperCase()}</h5>
                            <h6 style={{color:'#d63384'}}><span style={{color:'black'}}>User ID :</span> {userData?.data?.id}</h6>
                            <h6 style={{color:'green',fontWeight:'bold'}}><span style={{color:'black'}}>Current Role :</span> {userData?.data?.role}</h6>
                        </div>
                    </div>
                    <p style={{color:'gray',lineHeight:'20px',fontSize:'15px',fontWeight:'lighter'}}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>Time Zone : {userData?.data?.timeZone}</p>
                </Paper>
            </div>
            <div>

            </div>
        </div>
    );
}

export default ConfigutreRole;