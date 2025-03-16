import { useEffect, useState } from "react";

const ScrollPosition = (width, greater, less) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    window.innerWidth < width &&
    scrollPosition > greater &&
    scrollPosition < less
  );
};

