import FormLogin from '@/components/FormLogin/FormLogin'
import { Logo } from '@/components/Icons'
import PageContainer from '@/components/PageContainer/PageContainer'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import illustration from '../../../public/Ilustracion.svg'

const Login = () => {
  return (
    <PageContainer display='flex' alignItems='center'>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item md={6} sx={{ height: '567px' }}>
          <Box sx={{ ml: '22%' }} position='relative' zIndex='1'>
            <Typography variant='h2'>Bienvenido a</Typography>
            <Box display='flex' alignItems='center' sx={{ pl: '14px' }}>
              <Logo width='24px' />
              <Typography variant='h1' sx={{ ml: '14px', fontStyle: 'italic' }}>Notir</Typography>
            </Box>
          </Box>
          <Image src={illustration} alt='Ilustración' priority className='imagenAdaptable' />
        </Grid>
        <Grid item md={6} display='flex' alignItems='center' justifyContent='center'>
          <FormLogin />
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Login
