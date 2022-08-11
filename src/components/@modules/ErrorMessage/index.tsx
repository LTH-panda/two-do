import React from "react";

type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return <div className="text-gray-500 text-2xl">{message}</div>;
}

export default ErrorMessage;
