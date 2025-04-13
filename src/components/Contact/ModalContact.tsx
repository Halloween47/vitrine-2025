import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
// import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Typography } from '@mui/material';

// import styles from './Contact.module.css';
// import AddCallIcon from '@mui/icons-material/AddCall';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

//   const handleListItemClick = (value: string) => {
//     onClose(value);
//   };

  return (
    <Dialog onClose={handleClose} open={open}>
      {/* <DialogTitle>Contactez-moi directement ou laissez-moi un message via le formulaire.</DialogTitle> */}
      <Typography variant="subtitle1" sx={{p: "10px", textAlign: "center"}}>Contactez-moi directement ou laissez-moi un message via le formulaire.</Typography>
<List>
      <ListItem disablePadding >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary="lecontethomas.contact@proton.me" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <LinkedInIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary="Profil LinkedIn" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PeopleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary="Freelancing Malt" />
            </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function ModalContact() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography> */}
      <Button variant="contained" onClick={handleClickOpen}>
      Me Contacter
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}