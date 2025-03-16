import GotoSection from "../../GotoSection";
import MainButton from "../../buttons/Button";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills relative">
      <div className="container mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-8 flex flex-wrap md:flex-nowrap items-center justify-between gap-10 sm:gap-5 lg:gap-8 pt-24 md:mt-12">
        {/* Hire me */}
        <div className="hire">
          <span className="title inline-block text-lg font-medium text-green relative ml-2 animation-to-right">
            My Skills
          </span>
          <h2 className="font-semibold text-black-100 mt-4 text-4xl dark:text-title-dark animation-to-right">
            Why Hire Me For Your <br />
            Next <span className="text-green">Project?</span>
          </h2>
          <p className="mt-5 text-gray dark:text-paragraph-dark animation-to-right">
            I’m specialist in UI/UX Designe. My passion is designing & solving
            problems through user experience and research.
          </p>
          <MainButton
            text="Hire Me"
            className="mt-6 animation-to-top"
            onClick={() => GotoSection(".contact")}
          />
        </div>
        {/* Skills */}
        <div className="mySkills flex flex-wrap md:flex-nowrap items-center gap-7">
          {/* First & Second skills */}
          <div className="flex flex-row md:flex-col gap-10">
            <div className="skill p-4 rounded-xl bg-white dark:bg-black animation-scale">
              <svg
                width="25"
                height="25"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62492 9.625H25.3749M1.93695 10.2927L13.2983 25.0288C13.3808 25.1365 13.4871 25.2237 13.6087 25.2837C13.7304 25.3437 13.8643 25.3749 13.9999 25.3749C14.1356 25.3749 14.2694 25.3437 14.3911 25.2837C14.5128 25.2237 14.619 25.1365 14.7016 25.0288L26.0629 10.2927C26.1746 10.1473 26.2394 9.97129 26.2487 9.78814C26.258 9.60498 26.2113 9.42333 26.1148 9.26734L22.261 3.04664C22.1817 2.91791 22.0707 2.81159 21.9387 2.73779C21.8068 2.664 21.6581 2.62517 21.5069 2.625H6.49297C6.34175 2.62517 6.19308 2.664 6.06109 2.73779C5.9291 2.81159 5.81816 2.91791 5.73883 3.04664L1.885 9.26734C1.78856 9.42333 1.74188 9.60498 1.75116 9.78814C1.76044 9.97129 1.82524 10.1473 1.93695 10.2927V10.2927Z"
                  stroke="#0DB760"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinecap="round"
                />
                <path
                  d="M21.875 3.5L19.25 9.625L14 2.625M6.125 3.5L8.75 9.625L14 2.625M14 24.5L8.75 9.625M14 24.5L19.25 9.625"
                  stroke="#0DB760"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinecap="round"
                />
              </svg>
              <h5 className="font-semibold text-md mt-2 dark:text-white">
                Visual Design
              </h5>
              <p className="text-xs text-light mt-1 dark:text-paragraph-dark">
                Create user interface design with unique & modern ideas
              </p>
            </div>
            <div className="skill p-4 rounded-xl bg-white dark:bg-black animation-scale">
              <svg
                width="25"
                height="25"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 10.5L14 3.5L26.25 10.5L14 17.5L1.75 10.5Z"
                  stroke="#0DB760"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinecap="round"
                />
                <path
                  d="M6.125 13.125V20.125L14 24.5L21.875 20.125V13.125M26.25 20.125V10.5M14 17.5V24.5"
                  stroke="#0DB760"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinecap="round"
                />
              </svg>
              <h5 className="font-semibold text-md mt-2 dark:text-white">
                UX Research
              </h5>
              <p className="text-xs text-light mt-1 dark:text-paragraph-dark">
                Create user interface design with unique & modern ideas
              </p>
            </div>
          </div>
          {/* Third skill */}
          <div className="skill w-1/2 sm:w-full p-4 rounded-xl bg-white dark:bg-black animation-scale">
            <svg
              width="25"
              height="25"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.625 17.5H6.125L9.625 3.5L13.125 24.5L16.625 12.25L18.375 17.5H21.875"
                stroke="#0DB760"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinecap="round"
              />
              <path
                d="M23.625 19.25C24.5915 19.25 25.375 18.4665 25.375 17.5C25.375 16.5335 24.5915 15.75 23.625 15.75C22.6585 15.75 21.875 16.5335 21.875 17.5C21.875 18.4665 22.6585 19.25 23.625 19.25Z"
                stroke="#0DB760"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinecap="round"
              />
            </svg>

            <h5 className="font-semibold text-md mt-2 dark:text-white">
              Design Prototype
            </h5>
            <p className="text-xs text-light mt-1 dark:text-paragraph-dark">
              Create user interface design with unique & modern ideas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
