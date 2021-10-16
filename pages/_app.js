import '../styles/globals.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../util/theme";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      )
}

export default MyApp
