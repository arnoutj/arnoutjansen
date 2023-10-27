import Layout from "@components/Layout";
import Script from "next/script";
import { useState } from "react";

export default function Live() {
  const [loadingSongkick, setLoadingSongKick] = useState(true);

  return (
    <Layout pageTitle="Live">
      <section className="section">
        {/* <h1 className="mt-12 mb-6 text-4xl font-bold text-center">Live shows</h1> */}
        {loadingSongkick ? "Loading dates..." : null}
        <a
          href="https://www.songkick.com/artists/10309075"
          className="songkick-widget"
          data-theme="dark"
          data-track-button="on"
          data-detect-style="on"
          data-locale="en"
          data-other-artists="on"
          data-share-button="on"
          data-country-filter="on"
          data-rsvp="on"
          data-request-show="on"
          data-past-events="off"
          data-past-events-offtour="off"
          data-remind-me="off"
        ></a>
      </section>
      <Script src="//widget-app.songkick.com/injector/10309075" onLoad={() => setLoadingSongKick(false)} />
    </Layout>
  );
}
