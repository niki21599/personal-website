import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function SuccessAlert({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Erfolgreich versendet</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Vielen Dank für deine Nachricht.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>schließen</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
