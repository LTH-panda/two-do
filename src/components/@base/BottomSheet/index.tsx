import React from "react";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function BottomSheet({ isOpen, onClose, children }: BottomSheetProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-10 bg-gray-500 opacity-60 animate-fadeIn"
      />
      <div className="fixed inset-x-0 bottom-0 z-20 animate-slideUp bg-white rounded-t-xl pb-16">
        <div className="bg-gray-400 w-12 h-2 m-4 mx-auto rounded-3xl" />
        {children}
      </div>
    </>
  );
}

export default BottomSheet;
