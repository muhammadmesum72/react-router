const Button = ({ title = "Button", className, icon, primary, ...rest }) => {
  return (
    <button
      className={`px-8 py-4 group rounded-full  text-lg ${primary ? "  bg-amber-500 text-black font-bold  hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] " : " bg-transparent text-white font-medium  border border-white/20 hover:bg-white/5 transition-colors"} ${className}`}
      {...rest}
    >
      <span className="flex items-center gap-2">
        {title}

        {icon && icon}
      </span>
    </button>
  );
};
export default Button;
