import Layout from "@/components/Layout";
import { CartContext, IProductCart } from "@/contexts/cart";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [productInCart, setProductCountInCart] = useState<IProductCart>({});
  return (
    <CartContext.Provider value={{ productInCart, setProductCountInCart }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  );
}
