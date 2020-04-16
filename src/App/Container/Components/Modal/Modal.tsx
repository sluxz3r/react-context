import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      alignItems: "center",
      color: "white",
      backgroundColor: "#fbc02d",
      padding: theme.spacing(1),
    },
    titleModal: {
      marginLeft: theme.spacing(1),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(0),
      top: theme.spacing(0),
      color: theme.palette.grey[500],
    },
  });

interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

interface propsModal {
  title: string;
  content: {};
  openModal: boolean;
  actionButton: {};
  actionButton2?: {};
  width: 920;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" className={classes.titleModal}>
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    border: 3,
    padding: theme.spacing(2),
  },
}))(MuiDialogActions);

export const Modal = (props) => {
  return (
    <div>
      <Dialog
        maxWidth="md"
        aria-labelledby="customized-dialog-title"
        open={props.openModal}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>{props.content}</DialogContent>
        <DialogActions>
          {props.actionButton2 ? props.actionButton2 : null}
          {props.actionButton}
        </DialogActions>
      </Dialog>
    </div>
  );
};
