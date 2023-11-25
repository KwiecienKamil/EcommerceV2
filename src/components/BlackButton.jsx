import { motion } from "framer-motion"
const BlackButton = ({children, classname})  => {
  return (
    <motion.button
    whileHover={{
      opacity: 0.75,
      scale: 1.1
    }}
    onClick={() => {}} className={`py-2 px-2 bg-black text-white rounded-md shadow-md ${classname}`}>
      <h1>{children}</h1>
    </motion.button>
  )
}

export default BlackButton
