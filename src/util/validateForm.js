import * as yup from 'yup'

export const LoginValidate = yup.object().shape({
  user: yup.string().trim().required('Usuario o email requerido'),
  password: yup.string().trim().required('Contraseña requerida')
})

export const RegisterValidate = yup.object().shape({
  firstName: yup.string().trim().required('Primer nombre requerido'),
  secondName: yup.string().trim().required('Segundo nombre requerido'),
  email: yup.string().matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, 'Debe ser un correo electrónico válido').required('Correo electrónico requerido'),
  phone: yup.string()
    .matches(/^\d{3}[-\s]?\d{3}[-\s]?\d{4}[-\s]?\d{4}$/, 'Número de teléfono invalido')
    .required('El número de teléfono es obligatorio'),
  agency: yup.string().trim().required('Usuario o email requerido')
})

export const RegisterPasswordValidate = yup.object().shape({
  password: yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('La contraseña es obligatoria'),
  passwordVerify: yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Confirmar contraseña es obligatorio')
})
