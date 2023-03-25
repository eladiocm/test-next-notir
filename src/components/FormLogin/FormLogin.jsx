import { Box, Button, TextField, Typography } from '@mui/material'

const FormLogin = () => {
  return (
    <Box sx={{ boxShadow: '0px 8px 20px rgba(9, 109, 202, 0.08)', borderRadius: 2, bgcolor: '#fff', py: 9, px: 9, width: 472 }} component='form' display='flex' flexDirection='column' gap='40px'>
      <Box sx={{ ml: '5px' }}>
        <Typography sx={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '20px', color: '#12518C' }}>Bienvenido a Notir</Typography>
        <Typography sx={{ fontFamily: 'Nunito', fontWeight: '500', fontSize: '16px', color: '#636363' }}>Acceda a su cuenta</Typography>
      </Box>
      <Box display='flex' flexDirection='column' gap='16px'>
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography sx={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '14px', color: '#1A1A1A' }}>Usuario o correo electrónico</Typography>
          <TextField placeholder='ejemplo@email.com' fullWidth required />
        </Box>
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography sx={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '14px', color: '#1A1A1A' }}>Contraseña</Typography>
          <TextField placeholder='Introduce tu contraseña' fullWidth type='password' required />
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' gap='40px'>
        <Typography sx={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '16px', color: '#096DCA' }}>¿Olvidaste tu contraseña?</Typography>
        <Button
          sx={{ color: '#FFFFFF', bgcolor: '#12518C', height: '48px', width: '327px' }}
          type='submit'
        >
          Iniciar sesión
        </Button>
      </Box>
    </Box>
  )
}

export default FormLogin
