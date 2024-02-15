import React from "react";

const InputWithIcon = React.forwardRef(
  (
    {
      icon: Icon,
      placeholder,
      type,
      customClass = "",
      mainDiv = "",
      error,
      bgColor,
      ...props
    },
    ref
  ) => (
    <>
      <div className={`relative mt-5 inputWithIcon ${mainDiv}`}>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          {Icon && <Icon />}
        </span>
        <input
          ref={ref} // Forward the ref to the input element
          type={type}
          className={`pl-10 pr-4 py-3 border ${
            error ? "border-red-500" : "border-[#312E36] "
          }  ${bgColor || "bg-transparent"}
           rounded-lg focus:outline-none w-full ${
             error ? "focus:border-red-500" : "focus:border-customGreen"
           } ${customClass}`}
          placeholder={placeholder}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-0">{error}</p>}
    </>
  )
);

export default InputWithIcon;
