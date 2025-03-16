import "./contact.css";
import { ReactComponent as callIcon } from "../../../images/call-icon.svg";
import { ReactComponent as emailIcon } from "../../../images/email-icon.svg";
import { ReactComponent as locationIcon } from "../../../images/address-icon.svg";
import MainButton from "../../buttons/Button";

const Contact = () => {
  const contactInformations = [
    {
      icon: callIcon,
      title: "Call me",
      information: "+8801613968687",
    },
    {
      icon: emailIcon,
      title: "Email me",
      information: "ahmedtanvir8687@gmail.com",
    },
    {
      icon: locationIcon,
      title: "Address",
      information: "Zakigonj, Sylhet, Bangladesh.",
    },
  ];

  return (
    <div className="contact relative">
      <div className="container mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-10 sm:gap-5 lg:gap-8 pt-24 md:mt-12">
        <div className="text-center">
          <span className="title inline-block text-lg font-medium text-green relative ml-2 animation-top">
            Contact
          </span>
          <h2 className="font-semibold text-black-100 mt-4 text-4xl dark:text-title-dark animation-top">
            Let’s Discuss Your <span className="text-green">Project</span>
          </h2>
          <p className="mt-5 text-light max-w-lg dark:text-paragraph-dark animation-top">
            Let’s make something new, different and more meaningful or make
            thing more visual or conceptual
          </p>
        </div>
        <div className="w-full mt-4 flex justify-between gap-12 flex-col-reverse md:flex-row">
          {/* Other contact methods */}
          <div className="other-contact-methods flex flex-col gap-5">
            {contactInformations.map((info, index) => (
              <div
                className="flex gap-4 w-full p-4 rounded-lg bg-white dark:bg-black animation-to-right"
                key={index}
              >
                <div className="bg-green p-3 rounded-xl h-fit">
                  <info.icon />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-black-20 text-sm dark:text-white">
                    {info.title}
                  </p>
                  <p className="text-black-90 text-sm font-medium dark:text-black-20">
                    {info.information}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Form */}
          <form className="w-full lg:max-w-xl">
            <div className="grid gap-4 mb-5 md:grid-cols-2">
              <div className="animation-top">
                <input
                  type="text"
                  className="bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-gray-300 block w-full p-3  dark:text-paragraph-dark"
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="animation-top">
                <input
                  type="email"
                  className="bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-3 focus:outline-none focus:border-gray-300 dark:text-paragraph-dark"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="animation-top">
                <input
                  type="tel"
                  className="bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-3 focus:outline-none focus:border-gray-300 dark:text-paragraph-dark"
                  placeholder="Phone number"
                  required
                />
              </div>
              <div className="animation-top">
                <input
                  type="text"
                  className="bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-3 focus:outline-none focus:border-gray-300 dark:text-paragraph-dark"
                  placeholder="Budget"
                  required
                />
              </div>
            </div>
            <div className="mb-4 animation-top">
              <textarea
                type="text"
                className="bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full h-32 p-2.5 focus:outline-none focus:border-gray-300 dark:text-paragraph-dark"
                placeholder="Message"
                required
              />
            </div>
            <MainButton
              text="Submit Message"
              className="mt-2 float-right text-sm animation-to-top"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
