import React, { useState } from "react";
import { ReactComponent as PasswordSvg } from "../../assets/password.svg";
import { ReactComponent as InvisiblePasswordSvg } from "../../assets/invisiblePassword.svg";

const InputWithIcon = React.forwardRef(
  (
    {
      icon: Icon,
      placeholder,
      type,
      customClass = "",
      mainDiv = "",
      error,
      isPassword,
      bgColor,
      ...props
    },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    return (
      <>
        <div className={`relative mt-5 inputWithIcon ${mainDiv}`}>
          {!isPassword && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              {Icon && <Icon />}
            </span>
          )}
          {isPassword && (
            <span
              className="absolute inset-y-0 left-0 flex items-center pl-2"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <PasswordSvg /> : <InvisiblePasswordSvg />}
            </span>
          )}
          <input
            ref={ref} // Forward the ref to the input element
            type={isPassword && passwordVisible ? "text" : type}
            className={`pl-10 pr-4 py-3 border ${
              error ? "border-red-500" : "border-[#312E36] "
            } ${
              bgColor || "bg-transparent"
            } rounded-lg focus:outline-none w-full ${
              error ? "focus:border-red-500" : "focus:border-customGreen"
            } ${customClass}`}
            placeholder={placeholder}
            {...props}
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-0">{error}</p>}
      </>
    );
  }
);

export default InputWithIcon;
