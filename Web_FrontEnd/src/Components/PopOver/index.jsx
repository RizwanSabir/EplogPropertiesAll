
import { motion } from 'framer-motion';


const PopOver = ({ msg, closePopOver, color }) => (
  <motion.div
    initial={{ y: '-100%', opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: '-100%', opacity: 0 }}
    transition={{ ease: "linear" }}
    className={`fixed top-0 left-0 right-0 ${color} text-white text-center py-3 z-50 shadow-lg`}
  >
    <p>{msg}</p>
    <button
      className="Button poppins-regular rounded-md py-[5px] md:py-[6px] px-5 cursor-pointer"
      onClick={closePopOver}
    >
      OK
    </button>
  </motion.div>
);

export default PopOver