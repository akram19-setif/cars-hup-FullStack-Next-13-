"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({
  title,
  handleClick,
  containerStyles,
  btnType,
  isDisabled,
  rightIcon,
  textStyles,
}: CustomButtonProps) {
  return (
    <button
      disabled={isDisabled || false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            fill
            alt='view icon'
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
