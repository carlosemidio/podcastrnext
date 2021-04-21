import "../styles/globals.scss";
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import type { AppProps } from "next/app";

import styles from "../styles/app.module.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  );
}

export default App;
