import GoogleAnalytics from "@components/GoogleAnalytics";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <GoogleAnalytics />
      </body>
    </Html>
  );
}
