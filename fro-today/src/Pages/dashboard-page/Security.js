
import UserConfigure from "../../components/dashboard-component/UserConfigure";

const Security = () => {

    return (
        <div>
            <div style={{display:'grid',gridTemplateColumns:'1fr',gridTemplateRows:'auto',gridGap:'10px',marginTop:'20px',paddingRight:'20px'}}>
                <UserConfigure />
                {/* <UserAccessControll /> */}
            </div>
        </div>
    )
}

export default Security