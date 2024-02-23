import { cn } from "@/lib/utils";
import { MouseEvent, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    //console.log(e.target);
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <div
      className={cn(
        "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
        {
          visible: isOpen,
        }
      )}
      onClick={handleOutsideClose}
    >
      {" "}
      <div>
        <h2>out side</h2>
      </div>
      <div ref={containerRef} className="bg-white w-full max-w-md rounded-md">
        {children}
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = () => {
  return (
    <button
    // onClick={}
    >
      Close Button
    </button>
  );
};

Modal.CloseButton = CloseButton;

export default Modal;
