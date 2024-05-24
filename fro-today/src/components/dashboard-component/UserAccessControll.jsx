import { useEffect, useState } from "react";
import UserData from "../fakeData/UserData"

import SearchSomething from "../components/Search";

import '../styles/table.css'

const UserAccessControll = () => {
    
    const [userAccessData,setUserAccessData] = useState(UserData);
    const [userAccessSearch,setUserAccessSearch] = useState('');
  
    useEffect(()=>{
        if(userAccessSearch === '' || userAccessSearch){ 
            const filteredData1 = UserData?.filter((datum)=>datum.name.toLowerCase().includes(userAccessSearch.toLowerCase()) || datum.id.startsWith(userAccessSearch));
            setUserAccessData(filteredData1)
        }
  
    },[userAccessSearch])

    return(
        <div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingRight:'20px'}}>
                <h3>
                    Access Controls
                </h3>
                <SearchSomething setValue={setUserAccessSearch} Value={userAccessSearch} placeholder="Search By Name or ID" Style={{borderRadius:'7px',width:'300px',height:'40px',border:'1px solid rgba(237, 231, 225)',outline:'1px solid blue'}} />
            </div>

            <div className="scrollbar" style={{marginTop:'20px',height:'300px',overflow:'auto'}} >
                <table className="table table-hover">
                    <thead style={{ position: 'sticky', top: '0', zIndex: '999', background: 'white' }}>
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">User ID</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userAccessData?.map(({id,name,img,UserId})=><tr key={id}>
                            <th scope="row">
                                <img src={img} alt={name} style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                            </th>
                            <td>{name}</td>
                            <td>{id}</td>
                            <td style={{fontWeight:'bold',color:'gray',cursor:'pointer'}}>
                                Change Controlls
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserAccessControll;