import * as Yup from 'yup';

export const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password should have min 4 characters')
    .max(16, 'Password should have max 16 characters')
    .required('Password length is required'),
});
