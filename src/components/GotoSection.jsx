const GotoSection = (section) => {
  const contactSection = document.querySelector(section);
  contactSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

export default GotoSection;
