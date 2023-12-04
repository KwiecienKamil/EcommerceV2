import { useState } from "react";
import CartModal from "./components/CartModal";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import UserModal from "./components/UserModal";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  // Modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  // Login 
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  return (
    <>
      <ShopContextProvider>
        <div className="font-saira">
        <Navbar onOpenModal={handleOpenModal} onOpenLogin={handleOpenLogin}/>
        <Home />
        <AnimatePresence wait={true} initial={false} ExitComplete={() => null}>
          {openModal && <CartModal onClose={handleCloseModal} />}
          {openLogin && <UserModal onClose={handleCloseLogin} />}
        </AnimatePresence>
        </div>
        </ShopContextProvider>
    </>
  );
}

export default App;
