import { useRef, useEffect } from "react";

const CountUp = ({ end }) => {
  const span = useRef(null);

  let timeOut = 0;

  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      entry.contentRect.width > 640 ? (timeOut = 3000) : (timeOut = 0);
    });
  });

  resizeObserver.observe(document.body);

  useEffect(() => {
    const interObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              const count = setInterval(() => {
                if (span.current.textContent < end) {
                  span.current.textContent++;
                } else {
                  clearInterval(count);
                }
              }, 1000 / end);
            }, timeOut);
          }
        });
      },
      { threshold: 1 },
      3000
    );

    if (span.current) {
      interObserver.observe(span.current);
    }

    return () => {
      interObserver.disconnect();
    };
  }, [end]);

  return (
    <span
      className="count-up text-5xl font-semibold text-green relative w-fit"
      ref={span}
    >
      0
    </span>
  );
};

export default CountUp;
