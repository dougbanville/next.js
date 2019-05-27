import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/css/foundation.css"
          integrity="sha256-Ed7kL1p/BVuHCwGSEpUib2v9K7JtkCQlX4CweQEimJo="
          crossOrigin="anonymous"
        />
        <audio controls>
          <source src="https://dcs.megaphone.fm/DGT9945806008.mp3?key=7e5795b0ef864715055c7b6e77072571" />
        </audio>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
