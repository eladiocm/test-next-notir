import { Box, Typography } from '@mui/material'
import CustomButton from '../CustomButton/CustomButton'

function Form ({
  title,
  sizeTitle,
  width = '300px',
  onSubmit,
  children,
  disableButton,
  fontSize,
  wb,
  hb,
  textButton,
  type = 'submit'
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
      <CustomButton
        disableButton={disableButton}
        fontSize={fontSize}
        wb={wb}
        hb={hb}
        textButton={textButton}
        type={type}
      />
    </Box>
  )
}

export default Form
