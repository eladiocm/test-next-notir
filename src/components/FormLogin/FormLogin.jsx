import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { HidePass, ShowPass } from '../Icons'
import Link from 'next/link'
import CustomInput from '../CustomInput/CustomInput'
import { useRouter } from 'next/router'
import CustomButton from '../CustomButton/CustomButton'
import { useNotification } from '@/context/notification.context'
import { LoginValidate } from '@/util/validateForm'

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [inputs, setInputs] = useState({ user: '', password: '' })
  const [disableButton, setDisableButton] = useState(true)
  const { getError, getSuccess } = useNotification()

  const router = useRouter()

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

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
    LoginValidate.validate(inputs).then(() => {
      getSuccess('Iniciaste sesión')
    }).catch((error) => {
      getError(error.message)
    })
    router.push('/')
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{ boxShadow: '0px 8px 20px rgba(9, 109, 202, 0.08)', borderRadius: 2, bgcolor: '#fff', width: 472, height: 560, zIndex: 20 }}>
      <Box component='form' display='flex' flexDirection='column' gap='40px' onSubmit={onSubmit} sx={{ width: 344 }}>
        <Box sx={{ ml: '8px' }} display='flex' flexDirection='column' gap='4px'>
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
          <CustomButton disableButton={disableButton} type='submit' fontSize='16px' wb='327px' mx='8.5px' hb='48px' textButton='Iniciar sesión' />
        </Box>
      </Box>
    </Box>
  )
}

export default FormLogin
