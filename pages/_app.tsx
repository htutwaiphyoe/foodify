import "tailwind/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "components/hoc/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout
      head={{
        title: "Foodify - Best place for foodie",
        description: "The best place for foodie",
      }}
    >
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
