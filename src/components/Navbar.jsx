import BlackButton from "./BlackButton"
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Navbar = ({onOpenModal, onOpenLogin}) => {
  return (
    <div className="h-20 w-full flex justify-center">
      <div className="h-full w-[70%] flex items-center justify-between">
        <div className="flex gap-2">
        <BlackButton>Men</BlackButton>
        <BlackButton>Woman</BlackButton>
        <BlackButton>Kids</BlackButton>
        </div>
        <div className="h-full flex pr-16 font-logo">
        <a href="/" className="relative h-full flex items-center justify-start">
            <h1 className="z-[5] text-[25px]">Ecommerce</h1>
            </a>
        </div>
        <div className="flex text-[25px] gap-4 relative">
        <button onClick={onOpenLogin} className="hover:scale-125 duration-200"><AiOutlineUser /></button>
        <button onClick={onOpenModal} className="hover:scale-125 duration-200"><AiOutlineShoppingCart /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
