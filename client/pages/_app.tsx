import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import { ScrollTop } from 'primereact/scrolltop';
import { Provider } from 'react-redux';
import { store } from '../store/store'
import { ToastContainer } from 'react-toastify';

import { IntlProvider } from "react-intl";

import vi from "../lang/vi.json";
import en from "../lang/en.json";
import ja from "../lang/ja.json";

const messages: any = {
  vi,
  en,
  ja,
};

function getDirection(locale: any): string {
  if (locale === "vi") {
    return "rtl";
  }

  return "ltr";
}

function MyApp({ Component, pageProps }: AppProps) {

  const { pathname, locale } = useRouter();

  return <React.Fragment>

    <ToastContainer />
    <NextSeo noindex={true} />
    <ScrollTop />
    {!pathname.includes("admin") && <Header />}

    <Provider store={store}>
      <IntlProvider
        locale={locale ?? "rtl"}
        messages={messages[locale ?? ""]}>
        <Component {...pageProps} dir={getDirection(locale)} />
      </IntlProvider>
    </Provider>

    {!pathname.includes("admin") && <Footer />}
  </React.Fragment>
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
})
