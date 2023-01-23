import React, {useState} from 'react';
import Button from "../components/ui/button";
import Link from "next/link";
import TextInput from "../components/ui/textinput";
import { useAppDispatch } from "../redux/hooks";
import {FormProvider, useForm} from "react-hook-form";
import {setCookie} from "nookies";
import {UserApi} from "../api";
import {setUserData} from "../redux/slices/user";
import FormField from "../components/ui/form-field";
import Alert from "../components/ui/alert";
import {useRouter} from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import {LoginFormSchema} from "../utils/validations";

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema)
  });

  const [error, setError] = useState('');

  const onSubmit = async (dto: any) => {
    try {
      const data = await UserApi.login(dto);
      setCookie(null, 'token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      });
      setError('');
      dispatch(setUserData(data));
      router.push('/projects');
    } catch (err: any) {
      setError(err.response.data.title);
      console.warn(err);
    }
  }
  
  return (
    <div className="flex min-h-full bg-white">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 2xl:px-64 w-1/2">
        <div className="mx-auto w-full w-1/2">
          <div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Войти</h2>
            <p className="mt-2 text-gray-600">
              <Link href="/registration" className="font-medium text-indigo-600 hover:text-indigo-500">
                Зарегистрировать аккаунт
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" method="POST">
                  <FormField name="email" label="Email" type="email" />
                  <FormField name="password" label="Пароль" type="password" />
                  {error && <Alert>{error}</Alert>}
                  <Button>Войти</Button>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block bg-indigo-700">
      </div>
    </div>
  );
};

export default Login;