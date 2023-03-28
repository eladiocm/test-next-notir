import { Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { HidePass, ShowPass } from '../Icons'
import Link from 'next/link'
import CustomInput from '../CustomInput/CustomInput'

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
      <Box sx={{ ml: '5px' }} display='flex' flexDirection='column' gap='4px'>
        <Typography variant='h3'>Bienvenido a Notir</Typography>
        <Typography variant='subtitle1'>Acceda a su cuenta</Typography>
      </Box>
      <Box display='flex' flexDirection='column' gap='16px'>
        <CustomInput
          label='Usuario o correo electrónico'
          variantLabe='body2'
          name='user'
          type='text'
          value={inputs.user}
          placeholder='ejemplo@email.com'
          onChange={handleInputChange}
        />
        <CustomInput
          label='Contraseña'
          variantLabe='body2'
          name='password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Introduce tu contraseña'
          onChange={handleInputChange}
          value={inputs.password}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          adornmentEnd={() => ({
            visibleIcon: <HidePass />,
            hiddenIcon: <ShowPass />
          })}
        />
      </Box>
      <Box display='flex' flexDirection='column' gap='40px'>
        <Link href='#' className='forgetPassword'>¿Olvidaste tu contraseña?</Link>
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
