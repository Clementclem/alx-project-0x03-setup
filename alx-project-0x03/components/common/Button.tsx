import React from "react";

interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ action, buttonLabel, buttonBackgroundColor }) => {
  return (
    <button
      onClick={action}
      className={`px-4 py-2 text-white font-bold rounded`}
      style={{ backgroundColor: buttonBackgroundColor }}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
