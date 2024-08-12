import Layout from "@/components/Layout";
import { CartContext } from "@/contexts/cart";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContext.Provider value={0}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </CartContext.Provider>
  );
}
