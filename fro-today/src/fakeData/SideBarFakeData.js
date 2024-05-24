import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PersonPinIcon from '@mui/icons-material/PersonPin';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';

const SideBarFakeData = [
    {
        id: 1,
        name:'Employee',
        path:'/employee',
        Icon: <DashboardIcon />
    },
    {
        id: 2,
        name:'HR',
        path:'/hr',
        Icon: <PersonPinIcon />
    },
    {
        id: 3,
        name:'User Management',
        path:'/users',
        Icon: <ManageAccountsIcon />
    },
    {
        id: 4,
        name:'Content Management',
        path:'/content',
        Icon: <FolderCopyIcon />
    },
    {
        id: 5,
        name:'Analytics and Reporting',
        path:'Analitics',
        Icon: <AnalyticsIcon />
    },
    {
        id: 6,
        name:'Help/Support',
        path:'help',
        Icon: <HelpCenterIcon />
    },
    {
        id: 7,
        name:'Settings',
        path:'settings',
        Icon: <SettingsIcon />
    },
    
]

export default SideBarFakeData;