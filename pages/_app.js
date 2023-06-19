import { CartContextProvider } from "@/components/CartContext";
import { themeLight, themeDark } from "@/styles/ThemeConfig";
import "@/styles/global.css";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <CartContextProvider>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </CartContextProvider>
      </ThemeProvider>
    </>
  );
}
