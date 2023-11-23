import React, { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";

const CartModal = ({onClose}) => {

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0
    },
    visible: {
      y:0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      }
    },
    exit: {
      y:"100vh",
      opacity: 0
    }
  }
  return (
    <Backdrop>
      <motion.div 
      className="h-[400px] w-[300px] bg-white"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <button onClick={onClose} className="p-4 shadow-md">Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default CartModal;
