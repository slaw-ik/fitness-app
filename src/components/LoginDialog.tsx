import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStyles } from './styles';
import firebase from 'firebase';
import clsx from 'clsx';

interface LoginDialogType {
  open: boolean;

  handleClose(): void;
}

const LoginDialog: React.FC<LoginDialogType> = ({ open, handleClose }: LoginDialogType) => {
  const classes = useStyles();

  const googleButton = clsx(classes.googleButton);
  const fbButton = clsx(classes.fbButton);

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogContent>
        <div>
          <Button className={fbButton}>Continue with Facebook</Button>
        </div>
        <div>
          <Button className={googleButton}>Continue with Google</Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default LoginDialog;
