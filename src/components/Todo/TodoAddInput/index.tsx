import React from "react";

function TodoAddInput() {
  return (
    <>
      <div className="fixed inset-0 z-10 bg-gray-600 opacity-60 animate-fadeIn" />
      <div className="fixed inset-x-0 bottom-0 z-20 flex bg-white">
        <input placeholder="할일을 입력하세요" className="flex-1 p-4" />
      </div>
    </>
  );
}

export default TodoAddInput;
