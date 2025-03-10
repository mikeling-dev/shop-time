import React from "react";

// Button component with customizable className
const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  type = "button",
  ...rest
}) => {
  // Base classes that will always be applied
  const baseClasses = "rounded focus:outline-none";

  // Classes for different variants
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
  };

  // Classes for different sizes
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  // Combine all classes
  const buttonClasses = `
    ${baseClasses} 
    ${variantClasses[variant] || variantClasses.primary} 
    ${sizeClasses[size] || sizeClasses.medium}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className} // Add custom className at the end so it can override defaults
  `;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest} // Pass through any other props
    >
      {children}
    </button>
  );
};

export default Button;
