import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/dashboard-component/Header';
import SideBar from '../../components/dashboard-component/Sidebar';
import { useAlert } from '../../contextData/AlertProviderContext';

import Alert from '../../components/dashboard-component/Alert';

const PagePrototype = ()=> {

    const {alert,setAlert} = useAlert();
    const [sideBarOpen,setSideBarOpen] = useState(true)
    
    return (
        <div style={{ display: 'grid', gridTemplateColumns: sideBarOpen ? '1fr 4fr' : '0fr 6fr',transition:'grid-template-columns 0.1s ease'}}>
            {alert?.open && <Alert open={alert} setOpen={setAlert} message={alert?.message} severity={alert?.type} />}
            <div>
                <SideBar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'auto 5fr', gridAutoColumns: 'auto'}}>
                <div style={{ height: '60px', backgroundColor: 'red' }}>
                    <Header sideBarOpen={sideBarOpen} />
                </div>
                <div style={{ height: '90vh',overflow:'auto' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )

}

export default PagePrototype;