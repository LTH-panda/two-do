import React from "react";

type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center flex-1 text-2xl text-gray-300 font-primary">
      {message}
    </div>
  );
}

export default ErrorMessage;
