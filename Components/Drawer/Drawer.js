import Backdrop from "Components/Backdrop/Backdrop";
import React from "react";
import classes from "./Drawer.module.css";

const Drawer = ({ showDrawer, onClose, children }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (showDrawer) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={showDrawer} clicked={onClose} />
      <div className={attachedClasses.join(" ")} onClick={onClose}>
        {children}
      </div>
    </>
  );
};
export default Drawer;
