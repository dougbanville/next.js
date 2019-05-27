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
        <audio controls>
          <source src="https://dcs.megaphone.fm/DGT9945806008.mp3?key=7e5795b0ef864715055c7b6e77072571" />
        </audio>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
