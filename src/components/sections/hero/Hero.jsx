import "./hero.css";
import MainButton from "../../buttons/Button";
import GotoSection from "../../GotoSection";

const Hero = () => {
  return (
    <div className="hero relative z-10 overflow-x-clip">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-16 lg:gap-4 pt-20">
        {/* Some informations */}
        <div className="details w-full mt-14">
          <span className="title inline-block text-lg font-medium text-green relative ml-2 animation-right">
            Welcome
          </span>
          <h1 className="font-semibold text-black-100 mt-2 dark:text-title-dark animation-right-500">
            I have{" "}
            <span className="font-bold text-green">
              Creative
              <br />
              Design
            </span>{" "}
            Experience
          </h1>
          <p className="mt-5 text-gray dark:text-paragraph-dark animation-right-1000">
            I’m Tanvir, a creative Product Designer. I’ve been helping
            businesses to solve their problems with my design for 2 years.
          </p>
          <div className="btns mt-6">
            <MainButton
              className="animation-scale-1200"
              text="Contact Me"
              onClick={() => GotoSection(".contact")}
            />
            <button
              className="bg-transparent ml-2 py-3 px-5 rounded-xl font-medium text-black duration-300 hover:text-green dark:text-white dark:hover:text-green animation-scale-1600"
              onClick={() => GotoSection(".portfolio")}
            >
              View Portfolio{" "}
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline"
              >
                <path
                  d="M18.9175 10.6522L24.1714 11.3746M24.1714 11.3746L23.4491 16.6285M24.1714 11.3746L9.82852 22.2503"
                  stroke="#0DB760"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Personal photo */}
        <div className="image w-3/4 relative animation-left-1500">
          <div>
            <img
              src={require("../../../images/image 206.png")}
              alt=""
              className="w-10/12 mx-auto"
            />
          </div>
        </div>
        {/* Follow me on my accounts */}
        <div className="accounts flex-col gap-7 items-center mt-20 hidden lg:flex animation-opacity-2300">
          <div className="flex flex-col gap-7 text-green text-sm">
            <span className="char">follow</span>
            <div className="char flex gap-2">
              <span>me</span>
              <span>on:</span>
            </div>
          </div>
          <span className="line"></span>
          <div className="icons flex flex-col gap-2">
            <div className="facebook p-2 bg-green border border-green rounded-lg hover:cursor-pointer hover:bg-transparent duration-300">
              <svg
                width="12"
                height="12"
                viewBox="0 0 5 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99256 0H3.29442C2.28669 0 1.16581 0.43878 1.16581 1.95102C1.17073 2.47795 1.16581 2.98259 1.16581 3.55052H0V5.47107H1.20188V11H3.41041V5.43459H4.86811L5 3.54514H3.37235C3.37235 3.54514 3.376 2.70463 3.37235 2.46054C3.37235 1.86293 3.97301 1.89716 4.00914 1.89716C4.29497 1.89716 4.85072 1.89802 4.99339 1.89716V0H4.99256Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="instagram p-2 bg-green border border-green rounded-lg hover:cursor-pointer hover:bg-transparent duration-300">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.00048 6C4.00048 4.89547 4.89567 3.99984 6.00024 3.99984C7.10481 3.99984 8.00048 4.89547 8.00048 6C8.00048 7.10453 7.10481 8.00016 6.00024 8.00016C4.89567 8.00016 4.00048 7.10453 4.00048 6M2.91919 6C2.91919 7.7016 4.29857 9.08093 6.00024 9.08093C7.70191 9.08093 9.08129 7.7016 9.08129 6C9.08129 4.2984 7.70191 2.91907 6.00024 2.91907C4.29857 2.91907 2.91924 4.2983 2.91924 6M8.48328 2.79691C8.48323 2.93931 8.5254 3.07854 8.60447 3.19697C8.68354 3.31541 8.79596 3.40774 8.9275 3.46228C9.05905 3.51683 9.20382 3.53115 9.3435 3.50342C9.48318 3.4757 9.61151 3.40717 9.71225 3.30652C9.81298 3.20587 9.88161 3.0776 9.90945 2.93795C9.93729 2.79829 9.92309 2.65352 9.86864 2.52193C9.8142 2.39035 9.72195 2.27786 9.60358 2.1987C9.4852 2.11954 9.34601 2.07726 9.2036 2.0772H9.20331C9.01243 2.07729 8.82938 2.15314 8.69438 2.28808C8.55937 2.42302 8.48345 2.60603 8.48328 2.79691M3.57614 10.8839C2.99114 10.8573 2.67318 10.7598 2.46187 10.6775C2.18174 10.5684 1.98186 10.4386 1.7717 10.2287C1.56155 10.0188 1.43147 9.81917 1.32288 9.53904C1.24051 9.32784 1.14307 9.00979 1.11648 8.42482C1.08739 7.79237 1.08158 7.60238 1.08158 6.0001C1.08158 4.39781 1.08787 4.20835 1.11648 3.57538C1.14312 2.9904 1.24128 2.67298 1.32288 2.46115C1.43195 2.18102 1.56184 1.98115 1.7717 1.77101C1.98157 1.56086 2.18126 1.43078 2.46187 1.32221C2.67308 1.23984 2.99114 1.1424 3.57614 1.11581C4.20862 1.08672 4.39861 1.08091 6.00024 1.08091C7.60187 1.08091 7.79206 1.0871 8.42506 1.1159C9.01006 1.14254 9.32749 1.2407 9.53933 1.3223C9.81946 1.43088 10.0193 1.56125 10.2295 1.7711C10.4396 1.98096 10.5693 2.18112 10.6783 2.46125C10.7607 2.67245 10.8581 2.9905 10.8847 3.57547C10.9138 4.20845 10.9196 4.3979 10.9196 6.00019C10.9196 7.60248 10.9138 7.79194 10.8847 8.42491C10.8581 9.00989 10.7602 9.32784 10.6783 9.53914C10.5693 9.81926 10.4394 10.0191 10.2295 10.2288C10.0196 10.4385 9.81946 10.5685 9.53933 10.6776C9.32812 10.76 9.01006 10.8574 8.42506 10.884C7.79258 10.9131 7.60259 10.9189 6.00024 10.9189C4.39789 10.9189 4.20842 10.9131 3.57614 10.884M3.52646 0.036336C2.8877 0.065424 2.45122 0.166704 2.07003 0.315024C1.67551 0.468192 1.34108 0.67368 1.00713 1.00709C0.673179 1.3405 0.468211 1.67496 0.315037 2.06995C0.166711 2.45136 0.0654267 2.88758 0.0363375 3.52632C0.00676831 4.16606 0 4.37059 0 6C0 7.62941 0.00676831 7.83394 0.0363375 8.47368C0.0654267 9.11246 0.166711 9.54864 0.315037 9.93005C0.468211 10.3246 0.673227 10.6596 1.00713 10.9929C1.34103 11.3262 1.67503 11.5314 2.07003 11.685C2.45194 11.8333 2.8877 11.9346 3.52646 11.9637C4.16657 11.9928 4.37077 12 6.00024 12C7.62971 12 7.83425 11.9932 8.47402 11.9637C9.11283 11.9346 9.54902 11.8333 9.93045 11.685C10.325 11.5314 10.6594 11.3263 10.9934 10.9929C11.3273 10.6595 11.5318 10.3246 11.6854 9.93005C11.8338 9.54864 11.9355 9.11242 11.9641 8.47368C11.9932 7.83346 12 7.62941 12 6C12 4.37059 11.9932 4.16606 11.9641 3.52632C11.9351 2.88754 11.8338 2.45112 11.6854 2.06995C11.5318 1.67544 11.3268 1.34102 10.9934 1.00709C10.6599 0.673152 10.325 0.468192 9.93092 0.315024C9.54902 0.166704 9.11278 0.064944 8.4745 0.036336C7.83463 0.00710403 7.63019 0 6.00096 0C4.37173 0 4.16681 0.00676804 3.5267 0.036336"
                  fill="white"
                />
              </svg>
            </div>
            <div className="linkedin p-2 bg-green border border-green rounded-lg hover:cursor-pointer hover:bg-transparent duration-300">
              <svg
                width="12"
                height="12"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.27004 9.99977V3.25254H0.126356V9.99977H2.27026H2.27004ZM1.19864 2.33148C1.94603 2.33148 2.41133 1.81338 2.41133 1.16589C2.39734 0.503647 1.94603 0 1.21286 0C0.479178 0 0 0.503647 0 1.16583C0 1.81332 0.465132 2.33142 1.1846 2.33142H1.19848L1.19864 2.33148ZM3.45659 9.99977H5.6001V6.23222C5.6001 6.03083 5.61409 5.82891 5.67073 5.68507C5.82562 5.282 6.17833 4.86477 6.77066 4.86477C7.54614 4.86477 7.85654 5.48345 7.85654 6.39058V9.99977H10V6.13111C10 4.05874 8.9426 3.09436 7.53226 3.09436C6.37598 3.09436 5.86815 3.77048 5.586 4.23098H5.60027V3.25278H3.4567C3.48468 3.88575 3.45654 10 3.45654 10L3.45659 9.99977Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
