import { Suspense, lazy } from "react";
import LoadingAnimation from "./components/loading-animation/LoadingAnimation";
const Navbar = lazy(() => import("./components/sections/navbar/Navbar"));
const Hero = lazy(() => import("./components/sections/hero/Hero"));
const Rewards = lazy(() => import("./components/sections/rewards/Rewards"));
const Skills = lazy(() => import("./components/sections/Skills/Skills"));
const Portfolio = lazy(() =>
  import("./components/sections/portfolio/Portfolio")
);
const Reviews = lazy(() => import("./components/sections/reviews/Reviews"));
const Contact = lazy(() => import("./components/sections/contact/Contact"));
const Footer = lazy(() => import("./components/sections/footer/Footer"));
const ScrollToTop = lazy(() => import("./components/scrollToTop/ScrollToTop"));

function App() {
  const mainElement = document.getElementById("root");

  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  localStorage.getItem("mode") === null &&
    localStorage.setItem("mode", systemPrefersDark ? "dark" : "light");

  mainElement.classList = localStorage.getItem("mode");

  return (
    <div className="App dark:bg-black">
      <Suspense fallback={<LoadingAnimation />}>
        <Navbar />
        <div className="header relative mx-auto max-w-screen-lg">
          <Hero />
        </div>
        <Rewards />
        <Skills />
        <Portfolio />
        <Reviews />
        <Contact />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;
