import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material'
import CustomInput from '../CustomInput/CustomInput'
import Form from '../Form/Form'
import { useRouter } from 'next/router'
import { RegisterPasswordValidate } from '@/util/validateForm'
import { useNotification } from '@/context/notification.context'

export const FormFinishRegister = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordVerify, setShowPasswordVerify] = useState(false)
  const [inputs, setInputs] = useState({ password: '', passwordVerify: '' })
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
  const togglePasswordVerifyVisibility = () => {
    setShowPasswordVerify(!showPasswordVerify)
  }

  useEffect(() => {
    const allFieldsFilled = Object.values(inputs).every((inputValue) => inputValue !== '')
    if (allFieldsFilled && inputs.password === inputs.passwordVerify) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [inputs])

  const onSubmit = (event) => {
    event.preventDefault()
    RegisterPasswordValidate.validate(inputs).then(() => {
      getSuccess('Bienvenido')
      console.log(inputs)
      router.push('/')
    }).catch((error) => {
      getError(error.message)
    })
  }

  return (
    <Form title='Estamos terminando' onSubmit={onSubmit} disableButton={disableButton} textButton='Confirmar'>
      <Box sx={{ width: '100%' }} display='flex' flexDirection='column' gap='20px'>
        <CustomInput
          size='small'
          label='Contraseña'
          name='password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Introduce tu contraseña'
          onChange={handleInputChange}
          value={inputs.password}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          adornmentEnd={() => ({
            visibleIcon: <VisibilityOffOutlined fontSize='small' sx={{ color: '#333333' }} />,
            hiddenIcon: <VisibilityOutlined fontSize='small' sx={{ color: '#333333' }} />
          })}
        />
        <CustomInput
          size='small'
          label='Confirmación de contraseña'
          name='passwordVerify'
          type={showPasswordVerify ? 'text' : 'password'}
          placeholder='Introduce tu contraseña'
          onChange={handleInputChange}
          value={inputs.passwordVerify}
          showPassword={showPasswordVerify}
          togglePasswordVisibility={togglePasswordVerifyVisibility}
          adornmentEnd={() => ({
            visibleIcon: <VisibilityOffOutlined fontSize='small' sx={{ color: '#333333' }} />,
            hiddenIcon: <VisibilityOutlined fontSize='small' sx={{ color: '#333333' }} />
          })}
        />
      </Box>
    </Form>
  )
}
