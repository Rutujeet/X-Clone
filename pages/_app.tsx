import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Toaster} from 'react-hot-toast';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (<div className={inter.className}>
    <GoogleOAuthProvider clientId="929947048933-4ekamc8fgvd74rgvnlsiohuumuc4rabv.apps.googleusercontent.com">;
    <Component {...pageProps} />
    <Toaster />
    </GoogleOAuthProvider>
  </div>);
}
