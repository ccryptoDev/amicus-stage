import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

// THIS IS A REUSABLE MODAL COMPONENT:
// YOU NEED TO CONNECT IT TO THE COMPONENT THAT IS TO TRIGGER IS
// YOU CAN GO THE STORYBOOK TO SEE HOW IT IS USED

const Wrapper = styled.div`
  button {
    border: none;
    background: transparent;
  }
`;

const StyledDialog = styled(Dialog)`
  .MuiDialog-scrollPaper {
    display: block;
  }
  .MuiPaper-root {
    box-shadow: none;
  }

  .MuiBackdrop-root {
    background: #1a3855cc;
  }

  .MuiDialog-container .MuiDialog-paperWidthSm {
    max-width: 100%;
    width: 100%;
    background: transparent;
    box-shadow: none;
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    .MuiDialog-container .MuiDialog-paperWidthSm {
      border-radius: 0;
    }

    .MuiDialog-paper {
      margin: 0;
    }
  }
`;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

type IModalDialog = {
  open: boolean;
  modalContent: any;
  state?: any;
  cb?: Function;
  handleClose: any;
};

export const ModalDialog = ({
  modalContent: Content,
  state,
  cb,
  open,
  handleClose,
}: IModalDialog) => {
  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <Content closeModal={handleClose} state={state} cb={cb} />
    </StyledDialog>
  );
};

export default function Modal({
  button = null, // button component that triggers the modal open
  modalContent, // modal content
  state, //modal data
  triggerModal, // this prop opens the modal functionaly: e.g. on timer
  cb,
}: {
  button: JSX.Element | null;
  modalContent: any;
  state?: any;
  triggerModal?: Function;
  cb?: Function;
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // this prop opens the modal functionaly: e.g. on timer
    if (triggerModal) {
      setOpen(true);
    }
  }, [triggerModal]);

  return (
    <Wrapper className="modal">
      {button && (
        <button type="button" onClick={handleClickOpen}>
          {button}
        </button>
      )}
      <ModalDialog
        modalContent={modalContent}
        state={state}
        cb={cb}
        handleClose={handleClose}
        open={open}
      />
    </Wrapper>
  );
}
