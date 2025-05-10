import { motion } from 'framer-motion'
import styles from '../../styles/Game.module.css'

const OptionButton = ({ option, isSelected, isCorrect, showResult, onClick }) => {
  let buttonClass = styles.optionButton
  if (showResult) {
    buttonClass += isCorrect ? ` ${styles.correctOption}` : isSelected ? ` ${styles.wrongOption}` : ''
  } else if (isSelected) {
    buttonClass += ` ${styles.selectedOption}`
  }

  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      disabled={showResult}
      whileHover={!showResult ? { scale: 1.05 } : {}}
      whileTap={!showResult ? { scale: 0.95 } : {}}
    >
      {option}
    </motion.button>
  )
}

export default OptionButton