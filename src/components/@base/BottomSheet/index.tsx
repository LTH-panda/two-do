import React from "react";
import Sheet from "react-modal-sheet";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  vh?: number;
  children: React.ReactNode;
};

function BottomSheet({
  isOpen,
  onClose,
  vh = 0.5,
  children,
}: BottomSheetProps) {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} snapPoints={[vh]}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </Sheet>
  );
}

export default BottomSheet;
