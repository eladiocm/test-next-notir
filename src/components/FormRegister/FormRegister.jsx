import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { LocalPhoneOutlined } from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'

export const FormRegister = ({ setStepRegister }) => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleEmailChange = (event) => {
    const value = event.target.value
    // Verifica si el valor es un correo electrónico válido
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (regex.test(value) || value !== ' ') {
      setEmail(value)
    }
  }

  const handlePhoneChange = (event) => {
    const rawValue = event.target.value
    const value = rawValue.replaceAll(' ', '')
    // Verifica que el valor sean solo números
    const regex = /^[0-9]*$/
    if (regex.test(value) && value.length <= 14) {
      let formattedValue = ''
      for (let i = 0; i < value.length; i++) {
        formattedValue += value[i]
        if ((i === 2 && value.length > 3) ||
            (i === 5 && value.length > 6) ||
            (i > 7 && i % 4 === 1)) {
          formattedValue += ' '
        }
      }
      setPhone(formattedValue)
    }
  }

  return (
    <Box display='flex' alignItems='center' justifyContent='center' gap='50px' flexDirection='column' component='form' sx={{ width: '300px' }}>
      <Typography variant='h1' sx={{ fontSize: '48px', fontWeight: '700', color: '#12518C' }}>Regístrate</Typography>
      <Box display='flex' alignItems='center' justifyContent='center' gap='20px' flexDirection='column' sx={{ width: '300px' }}>
        <Box display='flex' flexDirection='column' gap='4px' sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: '700', fontSize: '14px', color: '#1A1A1A' }}>Primer nombre</Typography>
          <TextField
            fullWidth
            onChange={() => {}}
            InputProps={{
              placeholder: 'Primer nombre',
              style: { fontSize: 14, color: '#999999', fontWeight: 500 }
            }}
          />
        </Box>
        <Box display='flex' flexDirection='column' gap='4px' sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: '700', fontSize: '14px', color: '#1A1A1A' }}>Segundo nombre</Typography>
          <TextField
            fullWidth
            onChange={() => {}}
            InputProps={{
              placeholder: 'Segundo nombre',
              style: { fontSize: 14, color: '#999999', fontWeight: 500 }
            }}
          />
        </Box>
        <Box display='flex' flexDirection='column' gap='4px' sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: '700', fontSize: '14px', color: '#1A1A1A' }}>Correo electrónico</Typography>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <IconButton>
                    <MailOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
              placeholder: 'Correo electrónico',
              style: { fontSize: 14, color: '#999999', fontWeight: 500 }
            }}
            onChange={handleEmailChange}
            type='email'
            value={email}
            required
          />
        </Box>
        <Box display='flex' flexDirection='column' gap='4px' sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: '700', fontSize: '14px', color: '#1A1A1A' }}>Número de teléfono</Typography>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <IconButton>
                    <LocalPhoneOutlined />
                  </IconButton>
                  <span style={{ color: 'rgba(0, 0, 0, 0.38)' }}>+1</span>
                </InputAdornment>
              ),
              placeholder: 'Número de teléfono',
              style: { fontSize: 14, color: '#999999', fontWeight: 500 }
            }}
            onChange={handlePhoneChange}
            inputProps={{ maxLength: 19, pattern: '^[0-9]+$' }}
            type='tel'
            value={phone}
          />
        </Box>
        <Box display='flex' flexDirection='column' gap='4px' sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: '700', fontSize: '14px', color: '#1A1A1A' }}>Nombre de la agencia</Typography>
          <TextField
            fullWidth
            onChange={() => {}}
            InputProps={{
              placeholder: 'Nombre de la agencia',
              style: { fontSize: 14, color: '#999999', fontWeight: 500 }
            }}
          />
        </Box>
      </Box>
      <Button
        sx={{
          fontSize: '14px',
          mx: '5px',
          height: '33px',
          width: '100%',
          '&.Mui-disabled': {
            backgroundColor: '#CCCCCC',
            color: '#808080'
          }
        }}
        type='submit'
        variant='contained'
        onClick={() => { setStepRegister(2) }}
      >
        Continuar
      </Button>
      <Typography variant='body2' sx={{ fontSize: '12px', textAlign: 'center', px: '5px' }}>
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
