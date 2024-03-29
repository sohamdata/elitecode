import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { toast, Toaster, ToastBar } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>EliteCode</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="EliteCode" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster toastOptions={{
        duration: 3000,
      }}>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button onClick={() => toast.dismiss(t.id)} >
                    ✖️
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
