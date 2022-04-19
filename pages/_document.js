import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="icon" href="/icon.png" />
        <meta name="theme-color" content="#4285f4" />
        <meta name="msapplication-navbutton-color" content="#4285f4" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#4285f4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Inter&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
