import { cn } from "@/lib/utils";
import {
  MouseEvent,
  useRef,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TCloseButton = {
  children?: ReactNode;
};

type THeader = TCloseButton;

const Modal1 = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    //console.log(e.target);
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
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
        <div
          ref={containerRef}
          className="bg-white w-full max-w-md rounded-md p-4"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,

    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button className="ml-auto" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          className="size-6 bg-red-500 rounded-md text-white p-0.5"
          fill="none"
          strokeWidth={4}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex justify-between items-center w-full mb-3">
      {children}
    </div>
  );
};

Modal1.Header = Header;
Modal1.CloseButton = CloseButton;

export default Modal1;
