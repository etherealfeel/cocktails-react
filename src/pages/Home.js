import Alcoholic from '../components/Alcoholic'
import NonAlcoholic from '../components/NonAlcoholic'
import Optional from '../components/Optional'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      >
      <NonAlcoholic/>
      <Alcoholic/>
      <Optional/>
    </motion.div>
  )
}

export default Home
