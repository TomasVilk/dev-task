import React, { useState } from "react";

export const CustomButton = ({ 
    border,
    bgColor,
    color,
    children,
    fontSize,
    fontWeight,
    height,
    onClick, 
    radius,
    width,
    hoverColor
  }) => { 
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };

    const handleMouseLeave = () => {
      setIsHover(false);
    };

  return (
    <button 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHover ? hoverColor : bgColor,
        border,
        borderRadius: radius,
        height,
        width,
        color,
        fontSize,
        fontWeight,
        transition: "all 0.4s"
      }}
    >
    {children}
    </button>
  );
};