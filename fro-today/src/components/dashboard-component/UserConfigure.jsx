import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axiosInstance from "../customAxios/authAxios";
import EditIcon from '@mui/icons-material/Edit';
// import SelectItem from "../components/Select";
// import CheckIcon from '@mui/icons-material/Check';
import SearchSomething from "./Search";

import useFetch from "../../hooks/fetchHook";

const UserConfigure = () => {

    const navigate = useNavigate();
    const [{apiData},,setParams] = useFetch('user');

    const [userRoleData,setUserRoleData] = useState([]);    
    // const [selectedRole,setSelectedRole] = useState('');
    const [userRolesSearch,setUserRolesSearch] = useState('');

    // const [edit,setEdit] = useState(false);
    // const [Id,setId] = useState('');

    // const assignRole = async()=>{
    //     try {
    //         const {data} = await axiosInstance.put('http://localhost:8000/user/rolechange',{id:Id,role:selectedRole})
    //         setParams('')
    //         setEdit(false);
    //         setId('');
    //     } catch (error) {
    //         console.log(error.response.data.message)
    //     }
        
    // }

    useEffect(()=>{
        if(apiData){
            setUserRoleData(apiData?.users)
        }
    },[apiData])

    useEffect(()=>{

        if(userRolesSearch === '' || userRolesSearch){ 
            const filteredData = apiData?.users?.filter((datum)=>datum?.username?.toLowerCase().includes(userRolesSearch?.toLowerCase()) || datum?.id?.startsWith(userRolesSearch));
            setUserRoleData(filteredData)
        }
  
    },[userRolesSearch])

    return (<div>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingRight:'20px'}}>
            <h3>
                Configure User Roles
            </h3>
            <SearchSomething setValue={setUserRolesSearch} Value={userRolesSearch} placeholder="Search By Name or ID" Style={{borderRadius:'7px',width:'300px',height:'40px',border:'1px solid rgba(237, 231, 225)',outline:'1px solid green'}} />
        </div>
        <div className="scrollbar" style={{marginTop:'20px',height:'300px',overflow:'auto'}}>
            
            <table className="table table-hover">

                <thead style={{ position: 'sticky', top: '0', zIndex: '999', background: 'white' }}>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Role</th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                <tbody>
                    {userRoleData?.length > 0 ? userRoleData?.map(({_id,id,username,img,role})=><tr key={_id}>
                        <th scope="row">
                            <img src={img?img:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                        </th>
                        <td>{username}</td>
                        <td>{id}</td>
                        <td style={{color:role.toLowerCase() === 'admin' ? 'green' : "#d63384"}}>{role}</td>
                        <td style={{width:'200px'}}>
                            {/*!(Id === _id && edit)&&*/<EditIcon onClick={()=>{navigate(`/settings/configure-role/${_id}`)/*setId(_id);setEdit(true)*/}} style={{color:'gray',fontSize:'20px',cursor:'pointer'}} />}
                            {/* {(Id === _id && edit)&&
                                <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                                    <SelectItem value={selectedRole} setValue={setSelectedRole} items={[{value:"admin",name:"admin"},{value:"user",name:"user"}]} />
                                    <div>
                                        <CheckIcon onClick={assignRole} style={{color:'green',cursor:'pointer'}} />
                                    </div>
                                </div>
                            } */}
                        </td>
                    </tr>):<tr style={{fontWeight:'bold'}}>User not found</tr>}
                </tbody>

            </table>

        </div>
    </div>)
}

export default UserConfigure