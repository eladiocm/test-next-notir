import { Button } from '@mui/material'

function CustomButton ({
  disableButton,
  fontSize = '14px',
  wb = '100%',
  hb = '33px',
  mx,
  textButton,
  type
}) {
  return (
    <Button
      sx={{
        fontSize: `${fontSize}`,
        height: `${hb}`,
        width: `${wb}`,
        mx: `${mx}`,
        '&.Mui-disabled': {
          backgroundColor: '#CCCCCC',
          color: '#808080'
        }
      }}
      type={type}
      variant='contained'
      disabled={disableButton}
    >
      {textButton}
    </Button>
  )
}

export default CustomButton
