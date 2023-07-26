import Script from "next/script";

const GA_MEASUREMENT_ID = "SW3PBL3F9W";

export default function GoogleAnalytics() {
  if (process.env.NODE_ENV === "development") return null;
  return (
    <>
      <Script
        data-cookiecategory="analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script data-cookiecategory="analytics" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
