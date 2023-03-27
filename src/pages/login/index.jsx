import FormLogin from '@/components/FormLogin/FormLogin'
import { Logo } from '@/components/Icons'
import PageContainer from '@/components/PageContainer/PageContainer'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import illustration from '../../../public/Ilustracion.svg'

const Login = () => {
  return (
    <PageContainer display='flex' alignItems='center'>
      <Grid container alignItems='center' justifyContent='center' sx={{ minWidth: '980px' }}>
        <Grid item md={6} sx={{ height: '567px' }}>
          <Box sx={{ ml: '22%' }} position='relative' zIndex='1'>
            <Typography variant='body2' sx={{ fontWeight: '400', fontSize: '36px', color: '#12518C' }}>Bienvenido a</Typography>
            <Box display='flex' alignItems='center' sx={{ pl: '14px' }}>
              <Logo width='24px' />
              <Typography variant='body2' sx={{ fontWeight: '700', fontSize: '48px', color: '#12518C', ml: '14px', fontStyle: 'italic' }}>Notir</Typography>
            </Box>
          </Box>
          <Image src={illustration} alt='Ilustración' priority className='imagenAdaptable' />
        </Grid>
        <Grid item md={6} display='flex' alignItems='center' justifyContent='center' height='100'>
          <FormLogin />
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Login
