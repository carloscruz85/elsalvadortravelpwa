import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
    const {title, msg, close, show, f, clear} = props
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    f(
        {
            title: '',
            msg: '',
            show: false,
            close: ''
        }
    )
    clear();
    setOpen(false);
  };

  useEffect(() => {
    // console.log(props);
    setOpen(show)
  }, [show])



  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
                msg
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {close}
          </Button>
   
        </DialogActions>
      </Dialog>
    </div>
  );
}
