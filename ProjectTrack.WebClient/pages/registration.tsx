import React, { useState } from 'react';
import Button from "../components/ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch } from "../redux/hooks";
import { FormProvider, useForm } from "react-hook-form";
import { UserApi } from "../api";
import { setCookie } from "nookies";
import { setUserData } from "../redux/slices/user";
import FormField from "../components/ui/form-field";
import Alert from "../components/ui/alert";
import { NextPage } from "next";

const Registration: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const form = useForm({
    mode: "onChange"
  });

  const [error, setError] = useState('');

  const onSubmit = async (dto) => {
    try {
      const response = await UserApi.register(dto);
      
      setCookie(null, 'token', response.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      });
      
      setError('');
      
      dispatch(setUserData(response));
      await router.push('/projects');
    } catch (err) {
      setError(err.response.data.title);
    }
  }
  
  return (
    <div className="flex min-h-full bg-white">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-64 w-1/2">
        <div className="mx-auto w-full w-1/2">
          <div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Зарегистрироваться</h2>
            <p className="mt-2 text-gray-600">
              Уже есть аккаунт?{' '}
              <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Войти
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" method="POST">
                <FormField name="email" label="Email" type="email" />
                <FormField name="firstName" label="Имя" type="text" />
                <FormField name="lastName" label="Фамилия" type="text" />
                <FormField name="password" label="Пароль" type="password" />
                {error && <Alert>{error}</Alert>}
                <Button>Зарегистрироваться</Button>
              </form>
            </FormProvider>
          </div>

        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block bg-indigo-700"></div>
    </div>
  );
};

export default Registration;