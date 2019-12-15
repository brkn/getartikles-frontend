import "./Button.scss";

import React from "react";
import classNames from "classnames";

interface ButtonProps {
  id: string;
  onClick: React.ReactEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  shouldInactivateButton?: boolean;
  shouldDisplaySpinner?: boolean;
  iconClassName?: string;
}

export function Button({
  id,
  onClick,
  className,
  type = "button",
  shouldInactivateButton,
  shouldDisplaySpinner,
  iconClassName,
}: ButtonProps) {
  const buttonClassName = classNames("button", className, {
    inactive: shouldInactivateButton || shouldDisplaySpinner,
  });

  return (
    <button
      id={id}
      className={buttonClassName}
      type={type}
      onClick={handleClick}
    >
      {iconClassName && (
        <span
          className={iconClassName}
          id={`${id}.icon`}
        />
      )}
    </button>
  );

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (!shouldDisplaySpinner && !shouldInactivateButton) {
      onClick(event);
    }
  }
}
