import { Alert, Snackbar, Typography } from '@mui/material'

function Notification ({ open, msg, severity, handleClose }) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={2500}
        open={open}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          security={severity}
        >
          <Typography>{msg}</Typography>
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Notification
