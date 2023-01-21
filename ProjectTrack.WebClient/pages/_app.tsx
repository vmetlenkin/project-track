import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import { UserApi } from '../api';
import { setUserData } from '../redux/slices/user';

function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

App.getInitialProps = wrapper.getInitialAppProps(
  (store) => async ({ ctx, Component}) => {
    try {
      const { token } = parseCookies(ctx);

      if (token) {
        const userData = await UserApi.getUser(token);
        store.dispatch(setUserData(userData));
      }
    } catch (err) {
      console.error(err);
    }

    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}
    };
  });

export default wrapper.withRedux(App);

