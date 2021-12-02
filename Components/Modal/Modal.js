import Backdrop from "../Backdrop/Backdrop";
import React from "react";
import { XIcon } from "@heroicons/react/outline";
import classes from "./Modal.module.css";
const Modal = ({ showModal, onClose, children, title, footer }) => {
  return (
    <div>
      <>
        <Backdrop show={showModal} clicked={onClose} />
        <div
          className={`${classes.Modal}`}
          style={{
            transform: showModal ? "translateY(0)" : "translateY(-100vh)",
            opacity: showModal ? "1" : "0",
          }}
        >
          <header className="flex justify-between p-4 border-2">
            <span>{title || ""}</span>
            <XIcon
              className="h-6 w-6 cursor-pointer hover:scale-110 transition-all ease-in-out duration-120"
              onClick={onClose}
            />
          </header>
          <main className="p-2">
            {children || "Modal Content Goes Here..."}
          </main>
          <footer className="border-2 p-4">{footer}</footer>
        </div>
      </>
    </div>
  );
};

Modal.defaultProps = {
  showModal: false,
  onClose: () => console.log("Modal Close"),
  title: "",
  footer: "Footer",
};
export default Modal;
