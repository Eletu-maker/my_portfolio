import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "font-medium rounded-full transition-colors duration-300 flex items-center gap-2";

  const variants = {
    primary: "bg-[#0EA5E9] text-white hover:bg-[#0EA5E9]/90",
    secondary:
      "border border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white",
    accent: "bg-[#14B8A6] text-white hover:bg-[#14B8A6]/90",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
