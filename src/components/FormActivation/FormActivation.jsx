import { Box, Button, Chip, Typography } from '@mui/material'

import CharacterInputs from '../CharacterInputs/CharacterInputs'
import { useState } from 'react'

export const FormActivation = ({ setStepRegister }) => {
  const [disabled, setDisabled] = useState(true)

  return (
    <Box display='flex' alignItems='center' justifyContent='center' gap='50px' flexDirection='column' component='form'>
      <Typography variant='body2' sx={{ fontSize: '40px', fontWeight: '700', color: '#12518C' }}>Activación</Typography>
      <Box display='flex' alignItems='center' justifyContent='center' gap='5px' flexDirection='column'>
        <Typography variant='body1'>Hemos enviado un código de activación a:</Typography>
        <Chip label='correo@correo.com' size='small' />
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
