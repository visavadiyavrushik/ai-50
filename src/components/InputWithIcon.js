const InputWithIcon = ({
  icon: Icon,
  placeholder,
  type,
  customClass,
  mainDiv,
  ...props
}) => (
  <div className={`relative mt-4 ${mainDiv}`}>
    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
      <Icon />
    </span>
    <input
      type={type}
      className={`pl-10 pr-4 py-3 border bg-transparent border-[#312E36] rounded-lg focus:outline-none w-full focus:border-customGreen ${customClass}`}
      placeholder={placeholder}
      {...props}
    />
  </div>
);

export default InputWithIcon;
