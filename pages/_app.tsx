import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Toaster} from 'react-hot-toast';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (<div className={inter.className}>
    <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId="929947048933-4ekamc8fgvd74rgvnlsiohuumuc4rabv.apps.googleusercontent.com">;
    <Component {...pageProps} />
    <Toaster />
    <ReactQueryDevtools />
    </GoogleOAuthProvider>
    </QueryClientProvider>
  </div>);
}
