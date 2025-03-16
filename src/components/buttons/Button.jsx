const MainButton = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green py-3 px-5 rounded-2xl font-medium border-2 border-green text-white duration-300 hover:bg-transparent hover:text-green dark:text-black dark:hover:text-green ${className}`}
    >
      {text}
    </button>
  );
};

export default MainButton;
