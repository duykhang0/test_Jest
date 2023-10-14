import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Header } from "@/components";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
