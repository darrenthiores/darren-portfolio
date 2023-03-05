import { useInView } from "framer-motion";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ApplicationContext } from "../context/AppContext";

function useObserver(pageName: string) {
  const context = useContext(ApplicationContext);

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      context?.setActiveNav(pageName);
    }
  }, [ref, isInView, context, pageName]);

  return { ref };
}

export default useObserver;
