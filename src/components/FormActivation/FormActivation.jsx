import { Box, Button, Chip, Typography } from '@mui/material'

import CharacterInputs from '../CharacterInputs/CharacterInputs'
import { useState } from 'react'

export const FormActivation = ({ setStepRegister }) => {
  const [disabled, setDisabled] = useState(true)

  return (
    <Box display='flex' alignItems='center' justifyContent='center' gap='50px' flexDirection='column' component='form'>
      <Typography variant='h1' sx={{ fontSize: '40px' }}>Activación</Typography>
      <Box display='flex' alignItems='center' justifyContent='center' gap='5px' flexDirection='column'>
        <Typography variant='subtitle1' sx={{ color: '#121212', fontWeight: '400' }}>Hemos enviado un código de activación a:</Typography>
        <Chip label='correo@correo.com' size='small' sx={{ color: '#828282', fontWeight: '400' }} />
      </Box>
      <CharacterInputs setDisabled={setDisabled} />
      <Button
        variant='contained'
        disabled={disabled}
        sx={{
          width: '150px',
          height: '33px',
          borderRadius: '5px',
          '&.Mui-disabled': {
            backgroundColor: '#12518C',
            color: '#fff'
          }
        }}
        onClick={() => { setStepRegister(3) }}
      >
        Verificar
      </Button>
    </Box>
  )
}
