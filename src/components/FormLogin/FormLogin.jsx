import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { HidePass, ShowPass } from '../Icons'

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [inputs, setInputs] = useState({ user: '', password: '' })
  const [disableButton, setDisableButton] = useState(true)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputs((prevState) => ({ ...prevState, [name]: value }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    const allFieldsFilled = Object.values(inputs).every((inputValue) => inputValue !== '')
    setDisableButton(!allFieldsFilled)
  }, [inputs])

  return (
    <Box sx={{ boxShadow: '0px 8px 20px rgba(9, 109, 202, 0.08)', borderRadius: 2, bgcolor: '#fff', p: 9, width: 472, zIndex: 20 }} component='form' display='flex' flexDirection='column' gap='40px'>
      <Box sx={{ ml: '5px' }} display='flex' flexDirection='column'>
        <Typography sx={{ fontWeight: '700', fontSize: '20px', color: '#12518C' }}>Bienvenido a Notir</Typography>
        <Typography sx={{ fontWeight: '500', fontSize: '16px', color: '#636363' }}>Acceda a su cuenta</Typography>
      </Box>
      <Box display='flex' flexDirection='column' gap='16px'>
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography sx={{ fontWeight: '700', fontSize: '14px', color: '#1A1A1A' }}>Usuario o correo electrónico</Typography>
          <TextField
            fullWidth
            name='user'
            value={inputs.user}
            onChange={handleInputChange}
            InputProps={{
              placeholder: 'ejemplo@email.com',
              style: { fontSize: 14, color: '#333', fontWeight: 500 }
            }}
          />
        </Box>
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
                    {showPassword ? <HidePass /> : <ShowPass />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' gap='40px'>
        <Typography sx={{ fontWeight: '700', fontSize: '16px', color: '#096DCA' }}>¿Olvidaste tu contraseña?</Typography>
        <Button
          sx={{
            fontSize: '1rem',
            mx: '5px',
            height: '48px',
            width: '327px',
            '&.Mui-disabled': {
              backgroundColor: '#CCCCCC',
              color: '#808080'
            }
          }}
          type='submit'
          variant='contained'
          disabled={disableButton}
        >
          Iniciar sesión
        </Button>
      </Box>
    </Box>
  )
}

export default FormLogin
