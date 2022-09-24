import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_PATH,
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={Client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
