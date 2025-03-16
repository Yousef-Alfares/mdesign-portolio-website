import { useState } from "react";
import "./scrollToTop.css";

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  window.onscroll = () => setScrollPosition(window.scrollY);

  const goToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scrollPosition > 100 && (
        <div className="scroll-to-top fixed bottom-8 right-10 z-50 transition-all duration-300 hover:-translate-y-2">
          <button
            className="shadow-xl bg-green rounded-lg dark:shadow-[#ffffff0f]"
            onClick={goToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-10 h-10 p-3 dark:fill-white"
            >
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
