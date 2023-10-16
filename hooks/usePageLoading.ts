import Router from "next/router";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 500,
  showSpinner: false
});

export default function usePageLoading() {
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsPageLoading(true);
      NProgress.start();
    };
    const handleStop = () => {
      setIsPageLoading(false);
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);
    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    };
  }, []);

  return isPageLoading;
}
