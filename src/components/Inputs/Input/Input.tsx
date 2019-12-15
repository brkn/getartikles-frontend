import "./Input.scss";

import React from "react";
import classNames from "classnames";

import {KEYBOARD_EVENT_KEY} from "../../../utils/event-constants";
import {TInputType} from "../../../utils/input-constants";

interface InputProps {
  id: string;
  className?: string;
  name: string;
  title?: string;
  type?: TInputType;
  value?: string;
  onChange: React.ReactEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  errorMessage?: string;
  description?: React.ReactNode;
  isDisabled?: boolean;
  autoFocus?: boolean;
}

export function Input({
  id,
  className,
  name,
  title,
  type = "text",
  value,
  onChange,
  onKeyDown,
  isDisabled,
  placeholder,
}: InputProps) {
  const wrapperClassName = classNames(className, "input-wrapper");

  return (
    <div
      id={`${id}.wrapper`}
      className={wrapperClassName}
    >
      {title && (
        <label
          id={`${id}.label`}
          htmlFor={id}
          className={"input-label"}
        >
          {title}
        </label>
      )}

      <input
        id={`${id}.input`}
        className={"input"}
        type={type}
        name={name}
        disabled={isDisabled}
        onKeyDown={handleKeyDown}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === KEYBOARD_EVENT_KEY.ESCAPE) {
      const cleanEvent = clearValueOfEvent(event);

      onChange(cleanEvent);
    }

    /* if (onKeyDown) {
      onKeyDown(event);
    } */

    function clearValueOfEvent(event: React.KeyboardEvent<HTMLInputElement>) {
      const cleanValueEvent = {...event};
      cleanValueEvent.currentTarget.value = "";

      return cleanValueEvent;
    }
  }
}
