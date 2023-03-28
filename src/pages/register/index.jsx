import PageContainer from '@/components/PageContainer/PageContainer'
import { Grid } from '@mui/material'
import illustration from '../../../public/Ilustracion.svg'
import Image from 'next/image'
import { FormActivation } from '@/components/FormActivation/FormActivation'
import { useState } from 'react'
import { FormRegister } from '@/components/FormRegister/FormRegister'
import { FormFinishRegister } from '@/components/FormFinishRegister/FormFinishRegister'

function Register () {
  const [stepRegister, setStepRegister] = useState({ step: '1', email: '' })
  return (
    <PageContainer>
      <Grid container>
        <Grid item md={7} height='100vh' display='flex' alignItems='center' justifyContent='center'>
          <Image src={illustration} alt='Ilustración' priority className='imagenAdaptableRegister' />
        </Grid>
        <Grid item md={5} sx={{ backgroundColor: '#fff' }} display='flex' alignItems='center' justifyContent='center'>
          {stepRegister.step === '1' && <FormRegister setStepRegister={setStepRegister} stepRegister={stepRegister} />}
          {stepRegister.step === '2' && <FormActivation setStepRegister={setStepRegister} stepRegister={stepRegister} />}
          {stepRegister.step === '3' && <FormFinishRegister />}
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Register
