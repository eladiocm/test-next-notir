import FormLogin from '@/components/FormLogin/FormLogin'
import { Logo } from '@/components/Logo'
import PageContainer from '@/components/PageContainer/PageContainer'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const Login = () => {
  return (
    <PageContainer>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item md={6} sx={{ height: '100%' }}>
          <Box sx={{ gridRows: '1fr' }}>
            <Typography sx={{ fontFamily: 'Nunito', fontWeight: '400', fontSize: '36px', color: '#12518C' }}>Bienvenido a</Typography>
            <Box display='flex' alignItems='center' sx={{ pl: '14px' }}>
              <Logo width='24px' />
              <Typography sx={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '48px', color: '#12518C', ml: '14px' }}>Notir</Typography>
            </Box>
          </Box>
          <Image src='/image/Ilustracion.png' width={490} height={576} />
        </Grid>
        <Grid item md={6} display='flex' alignItems='center' justifyContent='center' height='100'>
          <FormLogin />
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Login
