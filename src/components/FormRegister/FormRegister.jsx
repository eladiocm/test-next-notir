import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import CustomInput from '../CustomInput/CustomInput'
import { MailIcon, PhoneIcon } from '../Icons'
import Form from '../Form/Form'

export const FormRegister = ({ setStepRegister }) => {
  const [inputs, setInputs] = useState({ firstName: '', secondName: '', email: '', phone: '', agency: '' })
  const [disableButton, setDisableButton] = useState(true)

  useEffect(() => {
    const allFieldsFilled = Object.values(inputs).every((inputValue) => inputValue !== '')
    setDisableButton(!allFieldsFilled)
  }, [inputs])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    if (name === 'phone') {
      const valueN = value.replace(/\D/g, '') // Solo conserva dígitos
      if (valueN.length <= 18) {
        let formattedValue = ''
        for (let i = 0; i < valueN.length; i++) {
          formattedValue += valueN[i]
          if (
            (i === 2 && valueN.length > 3) ||
            (i === 5 && valueN.length > 6) ||
            (i > 7 && i % 4 === 1)
          ) {
            formattedValue += ' '
          }
        }
        setInputs((prevState) => ({ ...prevState, [name]: formattedValue }))
      }
    } else if (name === 'email') {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      if (regex.test(value) || value !== ' ') {
        setInputs((prevState) => ({ ...prevState, [name]: value }))
      }
    } else {
      setInputs((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
    setStepRegister(2)
  }

  return (
    <Box display='flex' alignItems='center' flexDirection='column' gap='50px' width='300px'>
      <Form title='Regístrate' onSubmit={onSubmit} disableButton={disableButton}>
        <Box display='flex' alignItems='center' justifyContent='center' gap='20px' flexDirection='column' sx={{ width: '300px' }}>
          <CustomInput
            size='small'
            value={inputs.firstName}
            label='Primer nombre'
            name='firstName'
            placeholder='Primer nombre'
            onChange={handleInputChange}
          />
          <CustomInput
            size='small'
            label='Segundo nombre'
            name='secondName'
            value={inputs.secondName}
            placeholder='Segundo nombre'
            onChange={handleInputChange}
          />
          <CustomInput
            size='small'
            label='Correo electrónico'
            name='email'
            type='email'
            placeholder='Correo electrónico'
            onChange={handleInputChange}
            value={inputs.email}
            adornmentStart={() => <MailIcon />}
          />
          <CustomInput
            size='small'
            label='Número de teléfono'
            name='phone'
            type='tel'
            placeholder='Número de teléfono'
            onChange={handleInputChange}
            value={inputs.phone}
            inputProps={{ maxLength: 18 }}
            adornmentStart={() => <PhoneIcon />}
          />
          <CustomInput
            size='small'
            name='agency'
            value={inputs.agency}
            label='Nombre de la agencia'
            placeholder='Nombre de la agencia'
            onChange={handleInputChange}
          />
        </Box>
      </Form>
      <Typography variant='body1' sx={{ fontSize: '12px', textAlign: 'center', px: '5px', fontWeight: '400' }}>
        Al hacer clic en "Continuar" arriba, usted reconoce
        que ha leído y entendido, y acepta los
        <Link href='#'> Términos y condiciones </Link>
        y la
        <Link href='#'> Política de Privacidad </Link>
        de Notir.
      </Typography>
    </Box>

  )
}
