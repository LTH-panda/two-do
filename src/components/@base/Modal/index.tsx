import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-700 opacity-60 animate-fadeIn"
      />
      <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-slideUp">
        {children}
      </div>
    </>
  );
}

export default Modal;
