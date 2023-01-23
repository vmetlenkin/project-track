import * as yup from 'yup';

export const LoginFormSchema = yup
  .object()
  .shape({
    email: yup.string().email('Введите правильный email').required('Введите email'),
    password: yup.string().min(5, 'Пароль должен быть не меньше 5 символов!').required('Введите пароль')
  });