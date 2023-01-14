import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import HomePageContextProvider from "./context/HomePageContext";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <HomePageContextProvider>
      <Component {...pageProps} />
    </HomePageContextProvider>
  );
}

export default MyApp;
