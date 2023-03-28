import { Box, Button, Typography } from '@mui/material'

function Form ({
  title,
  sizeTitle,
  width = '300px',
  onSubmit,
  children,
  disableButton,
  fontSize = '14px',
  wb = '100%',
  hb = '33px'
}) {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap='50px'
      flexDirection='column'
      component='form'
      sx={{ width: `${width}` }}
      onSubmit={onSubmit}
    >
      <Typography variant='h1' sx={{ fontSize: `${sizeTitle}` }}>{title}</Typography>
      <>
        {children}
      </>
      <Button
        sx={{
          fontSize: '14px',
          height: '33px',
          width: '100%',
          '&.Mui-disabled': {
            backgroundColor: '#CCCCCC',
            color: '#808080'
          }
        }}
        type='submit'
        variant='contained'
        disabled={disableButton}
      >
        Confirmar
      </Button>
    </Box>
  )
}

export default Form
