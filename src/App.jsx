import { useState } from "react";
import CartModal from "./components/CartModal";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div>
        <Navbar onOpen={handleOpenModal} />
        <Home />
        <AnimatePresence wait={true} initial={false} ExitComplete={() => null}>
          {openModal && <CartModal onClose={handleCloseModal} />}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
