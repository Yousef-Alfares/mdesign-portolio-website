import "./navbar.css";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import GotoSection from "../../GotoSection";

const navigation = [
  {
    name: "Skills",
    current: false,
  },
  {
    name: "Portfolio",
    current: false,
  },
  {
    name: "Testimonial",
    current: false,
  },
  {
    name: "Contact",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [offsetElement, setOffsetElement] = useState("");

  // Main element
  const mainElement = document.getElementById("root");

  const getElement = (e) => document.querySelector(e);

  const sections = ["skills", "portfolio", "testimonial", "contact"];

  window.onscroll = () => {
    // Create map on sections
    // eslint-disable-next-line array-callback-return
    sections.map((section) => {
      // If the section is show ? the link of section change color
      // eslint-disable-next-line no-unused-expressions
      window.scrollY >= getElement(`.${section}`).offsetTop - 300 &&
      window.scrollY <= getElement(`.${section}`).offsetTop
        ? setOffsetElement(section)
        : false;
    });
    window.scrollY < getElement(".header").offsetTop + 540 &&
      setOffsetElement("");
  };

  // Shortcut of setItem localStorage
  const lSset = (key, value) => localStorage.setItem(key, value);

  // Shortcut of getItem localStorage
  const lSget = (key) => localStorage.getItem(key);

  const [isDark, setIsDark] = useState(lSget("mode") === "dark");

  const isDarkMode = () => {
    return lSget("mode") === "dark" ? setIsDark(true) : setIsDark(false);
  };

  lSget("mode") === null && lSset("mode", "light");

  const setDark = () => {
    lSget("mode") === "light" ? lSset("mode", "dark") : lSset("mode", "light");
    mainElement.classList = lSget("mode");
    isDarkMode();
  };
  return (
    <Disclosure
      as="nav"
      className="fixed w-full top-0 z-50 bg-[#ffffffe0] dark:bg-[#000000e0] backdrop-blur-lg"
    >
      {({ open }) => (
        <div className="navbar relative max-w-screen-lg mx-auto">
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            {/* Desktop menu & Mobile menu button */}
            <div className="relative flex h-20 items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-green hover:text-white focus:outline-none duration-300">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Desktop menu */}
              <div className="flex flex-1 items-center justify-end md:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={require("../../../images/Logo (3).png")}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <a
                        key={index}
                        onClick={() => GotoSection(`.${sections[index]}`)}
                        className={classNames(
                          item.name.toLowerCase() === offsetElement
                            ? "text-green hover:cursor-pointer"
                            : "text-gray-600 hover:text-gray-700 dark:text-white dark:hover:text-gray-200 hover:cursor-pointer",
                          "rounded-md px-2 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-7">
                  <button
                    className="toggle-mode w-fit h-fit p-2 rounded-full border-2 border-green hover:bg-green duration-300 focus-visible:outline-none"
                    onClick={() => setDark()}
                    aria-label="dark mode"
                  >
                    {isDark ? (
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="p-0.5 fill-[#dfdfdf]"
                      >
                        <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="p-0.5 fill-[#363636]"
                      >
                        <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                      </svg>
                    )}
                  </button>
                  <button className="text-sm font-medium border-green border-2 rounded-2xl px-4 py-3 duration-300 hover:bg-green hover:text-white dark:text-white dark:hover:text-black">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden pb-4">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={index}
                  as="a"
                  onClick={() => GotoSection(`.${sections[index]}`)}
                  className={classNames(
                    item.name.toLowerCase() === offsetElement
                      ? "bg-green text-white"
                      : "text-gray-500 hover:bg-gray-200 dark:hover:bg-[#ffffff17] hover:cursor-pointer",
                    "block rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="sm:heddin flex items-center gap-5 px-2">
              <button
                className="toggle-mode w-fit h-fit p-2 rounded-full border-2 border-green hover:bg-green duration-300 focus-visible:outline-none"
                onClick={() => setDark()}
                aria-label="dark mode"
              >
                {isDark ? (
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="p-0.5 fill-[#dfdfdf]"
                  >
                    <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="p-0.5 fill-[#363636]"
                  >
                    <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                  </svg>
                )}
              </button>
              <button className="text-sm font-medium border-green border-2 rounded-2xl px-4 py-3 hover:bg-green hover:text-white duration-300 dark:text-white dark:hover:text-black">
                Download CV
              </button>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
