import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Edit from '@mui/icons-material/Edit';

const DialogBox = ({content,Icon,iconColor="gtay",iconSize='15px',saveButton}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
      setOpen(false);
    };

  const CustomIcon = Icon || Edit;
  return (
    <div>
        <CustomIcon onClick={handleClickOpen} style={{color:iconColor,fontSize:iconSize,cursor:'pointer'}}/>
        <Dialog
            style={{maxWidth:'100%',height:'100%'}}
            open={open}
            onClose={handleClose}
        >
            {content}
            <div onClick={handleClose} style={{paddingBottom:'20px'}}>
                {saveButton}
            </div>
        </Dialog>
    </div>
  );
}

export default DialogBox;