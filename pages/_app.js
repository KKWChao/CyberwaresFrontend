import { CartContextProvider } from "@/components/CartContext";
import { themeLight, themeDark } from "@/styles/ThemeConfig";
import "@/styles/global.css";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </ThemeProvider>
    </>
  );
}
