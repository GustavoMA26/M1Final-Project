import { useState } from 'react';
import { Box, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal({children}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button startIcon={<AddCircleOutlinedIcon />} onClick={handleOpen} size="large">DETAILS</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {children}
        </Box>
      </Modal>
    </div>
  );
}

export { BasicModal}