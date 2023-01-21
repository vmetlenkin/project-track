import React, { useEffect } from 'react';
import { useAppSelector } from "../redux/hooks";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const RouteGuard: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.data);
  
  useEffect(() => {
    console.log(router.pathname);
    if (!user && router.pathname !== '/login' && router.pathname !== '/registration') {
      router.push('/login');
    }
  });
  
  return (
    <div>
      { children }
    </div>
  );
};

export default RouteGuard;