import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const Alerting = ({open,setOpen,message,severity}) => {

    const handleClose = () => {
        setOpen({open:false,message:'',type:''});
    }
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open?.open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={message}
            key={'top' + 'center'}
        >
            <Alert onClose={handleClose} severity={severity} variant="filled">
                {message}
            </Alert>
    </Snackbar>
    )
}

export default Alerting