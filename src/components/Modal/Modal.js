import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';

const Modal = ({ handleClose, open, children, title }) => {
  return(
    <Dialog onClose={handleClose} open={open}>
      <DialogContent>
        <DialogContent>{title}</DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal
