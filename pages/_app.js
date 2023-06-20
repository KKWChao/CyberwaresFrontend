import { CartContextProvider } from "@/components/CartContext";
import { themeLight, themeDark } from "@/styles/ThemeConfig";
import "@/styles/global.css";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <ThemeProvider theme={themeLight}>
        {loading ? (
          <Loader />
        ) : (
          <CartContextProvider>
            <AnimatePresence mode="wait">
              <Component {...pageProps} />
            </AnimatePresence>
          </CartContextProvider>
        )}
      </ThemeProvider>
    </>
  );
}
