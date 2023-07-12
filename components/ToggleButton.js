import { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };

  return (
    <button
      className={`relative flex items-center w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
        isToggled ? "bg-primary" : "bg-gray-300"
      }`}
      onClick={handleToggle}
    >
      <span
        className={`inline-block w-5 h-5 bg-white rounded-full transform transition-transform duration-300 ${
          isToggled ? "translate-x-6 bg-orange-500" : "translate-x-1"
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
