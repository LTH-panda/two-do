import React from "react";
import SvgIcon from "../SvgIcon";

type TextFieldProps = {
  placeholder: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onReset: () => void;
};

function TextField({
  placeholder,
  name,
  value,
  onChange,
  onReset,
}: TextFieldProps) {
  return (
    <div className="shadow-md flex bg-white rounded-2xl items-center">
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="flex-1 p-6 outline-none bg-transparent"
      />
      {value && (
        <button type="button" onClick={onReset} className="p-5">
          <SvgIcon name="xSquare" />
        </button>
      )}
    </div>
  );
}

export default TextField;
