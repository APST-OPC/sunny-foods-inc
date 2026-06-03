import AOS from "aos";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Outlet } from "react-router-dom";

import { useLayoutContext } from "~/hooks/useLayoutContext";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { smoothScrollToTop } from "./utils";

import "aos/dist/aos.css";

const Layout = () => {
  const { isSidebarOpen, isShowFab, setShowFab } = useLayoutContext();

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      setShowFab(window.scrollY > window.innerHeight - 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      AOS.refreshHard();
    };
  }, [setShowFab]);

  return (
    <main className="flex min-h-screen flex-col bg-(--light-brown)/10">
      <header className="sticky top-0 left-0 z-50 flex h-20 w-full bg-[#f5ede4]">
        <Navbar />
      </header>

      <div className="flex-1">
        <Outlet />
      </div>

      <AnimatePresence>
        {isShowFab && !isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fab bottom-8">
            <button
              className="btn btn-sm btn-circle md:btn-lg btn-success text-white"
              onClick={smoothScrollToTop}>
              <FaAngleUp />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Layout;
