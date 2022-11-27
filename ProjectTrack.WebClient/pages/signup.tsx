import React from 'react';
import Button from "../components/ui/button";
import Link from "next/link";
import TextInput from "../components/ui/textinput";

const Signup = () => {
  return (
    <div className="flex min-h-full bg-white">
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-64 w-1/2">
        <div className="mx-auto w-full w-1/2">
          <div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Зарегистрироваться</h2>
            <p className="mt-2 text-gray-600">
              Уже есть аккаунт?{' '}
              <Link href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                Войти
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">
                    
                    <TextInput id="email" type="email" label="Email" />
                    <TextInput id="first_name" type="text" label="Имя" />
                    <TextInput id="last_name" type="text" label="Фамилия" />
                    <TextInput id="password" type="password" label="Пароль" />

                    <div className="flex justify-end">
                      <Button full>Зарегистрироваться</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;