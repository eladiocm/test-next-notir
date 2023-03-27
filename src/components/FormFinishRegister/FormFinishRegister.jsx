import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material'

export const FormFinishRegister = ({ setStepRegister }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordVerify, setShowPasswordVerify] = useState(false)
  const [inputs, setInputs] = useState({ password: '', passwordVerify: '' })
  const [disableButton, setDisableButton] = useState(true)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputs((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleInputVerifyChange = (event) => {
    const { name, value } = event.target
    setInputs((prevState) => ({ ...prevState, [name]: value }))
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const togglePasswordVerifyVisibility = () => {
    setShowPasswordVerify(!showPasswordVerify)
  }

  useEffect(() => {
    const allFieldsFilled = Object.values(inputs).every((inputValue) => inputValue !== '')
    if (allFieldsFilled) {
      setDisableButton(!allFieldsFilled)
    }
  }, [inputs])

  return (
    <Box display='flex' alignItems='center' justifyContent='center' gap='50px' flexDirection='column' component='form' sx={{ width: '300px' }}>
      <Typography variant='h1' sx={{ fontSize: '48px', fontWeight: '700', color: '#12518C', textAlign: 'center' }}>Estamos terminando</Typography>
      <Box sx={{ width: '100%' }} display='flex' flexDirection='column' gap='20px'>
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography sx={{ fontWeight: '700', fontSize: '14px', color: '#1A1A1A' }}>Contraseña</Typography>
          <TextField
            type={showPassword ? 'text' : 'password'}
            name='password'
            value={inputs.password}
            onChange={handleInputChange}
            InputProps={{
              placeholder: 'Introduce tu contraseña',
              style: { fontSize: 14, color: '#333', fontWeight: 500 },
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={togglePasswordVisibility} edge='end' sx={{ right: '8px' }}>
                    {showPassword ? <VisibilityOffOutlined sx={{ color: '#333333' }} /> : <VisibilityOutlined sx={{ color: '#333333' }} />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography sx={{ fontWeight: '700', fontSize: '14px', color: '#1A1A1A' }}>Confirmación de contraseña</Typography>
          <TextField
            type={showPasswordVerify ? 'text' : 'password'}
            name='passwordVerify'
            value={inputs.passwordVerify}
            onChange={handleInputVerifyChange}
            InputProps={{
              placeholder: 'Introduce tu contraseña',
              style: { fontSize: 14, color: '#333', fontWeight: 500 },
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={togglePasswordVerifyVisibility} edge='end' sx={{ right: '8px' }}>
                    {showPasswordVerify ? <VisibilityOffOutlined sx={{ color: '#333333' }} /> : <VisibilityOutlined sx={{ color: '#333333' }} />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Box>
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
