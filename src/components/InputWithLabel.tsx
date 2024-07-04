import { useRef, useEffect } from "react";
import { InputWithLabelProps } from "../types/types";

export const InputWithLabel = ({
  id,
  value,
  type,
  onInputChange,
  isFocused,
  children,
}: InputWithLabelProps) => {
  // A - First create a ref with the useRef Hook
  const inputRef = useRef<HTMLInputElement>(null);

  // C
  useEffect(() => {
    if (isFocused && inputRef.current) {
      // D
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <div className="inline border border-white w-fit rounded-xl my-2 bg-slate-600 text-slate-100">
        <label
          htmlFor={id}
          // className="border border-200 border-t-indigo-800 border-l-red-700 border-b-transparent border-r-transparent pl-[5px] text-large"
          className="px-2"
        >
          {children}
        </label>
        <input
          // B
          ref={inputRef}
          id={id}
          type={type}
          value={value}
          autoFocus={isFocused}
          onChange={onInputChange}
          // defaultValue=""
          placeholder="Search..."
          className="border-1 border-slate-500 rounded-sm bg-slate-100"
        />
      </div>
    </>
  );
};
