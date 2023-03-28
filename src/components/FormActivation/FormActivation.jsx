import { Box, Chip, Typography } from '@mui/material'

import CharacterInputs from '../CharacterInputs/CharacterInputs'
import { useState } from 'react'
import Form from '../Form/Form'
import { useNotification } from '@/context/notification.context'

export const FormActivation = ({ setStepRegister, stepRegister }) => {
  const [disabled, setDisabled] = useState(true)
  const [inputs, setInputs] = useState(['', '', '', ''])
  const { getSuccess } = useNotification()

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(inputs.join(''))
    getSuccess('Cuenta activada')
    setStepRegister((prevState) => ({ ...prevState, step: '3' }))
  }

  return (
    <Form title='Activación' sizeTitle='40px' onSubmit={onSubmit} disableButton={disabled} wb='150px' textButton='Verificar'>
      <Box display='flex' alignItems='center' justifyContent='center' gap='5px' flexDirection='column'>
        <Typography variant='subtitle1' sx={{ color: '#121212', fontWeight: '400' }}>Hemos enviado un código de activación a:</Typography>
        <Chip label={stepRegister.email} size='small' sx={{ color: '#828282', fontWeight: '400' }} />
      </Box>
      <CharacterInputs setDisabled={setDisabled} inputs={inputs} setInputs={setInputs} />
    </Form>
  )
}
