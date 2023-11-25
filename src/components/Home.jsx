import ProductItem from "./ProductItem"
import Searchbar from "./Searchbar"

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[70%] flex justify-between">
        <div className="flex items-center gap-4">
        <button className="relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300">T-shirt</button>
        <button className="relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300">Hoodie</button>
        <button className="relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300">Jeans</button>
        <button className="relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300">Sneakers</button>
        </div>
        <Searchbar />
      </div>
      <div className="w-[75%] grid grid-cols-4 mt-8">
        <ProductItem />
      </div>
    </div>
  )
}

export default Home
