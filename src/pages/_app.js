import Nav from "./../components/Nav";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="w-screen full-container flex flex-col">
      <Nav />
      <div
        id="content"
        className="pt-16 md:pt-20 text-paper grow flex child:grow flex-col"
      >
        <LazyMotion features={domAnimation}>
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={() =>
              document.getElementById("content").scrollTo(0, 0)
            }
          >
            <m.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className=""
            >
              <Component {...pageProps} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  );
}

export default MyApp;
