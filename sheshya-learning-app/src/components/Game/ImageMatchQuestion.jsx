import { motion } from 'framer-motion'
import { useState } from 'react'
import OptionButton from './OptionButton'
import styles from '../../styles/Game.module.css'

const ImageMatchQuestion = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [hasAnswered, setHasAnswered] = useState(false)

  const handleOptionClick = (option) => {
    if (hasAnswered) return
    
    setSelectedOption(option)
    setHasAnswered(true)
    setTimeout(() => onAnswer(option === question.correctAnswer), 1500)
  }

  return (
    <div className={styles.imageMatchContainer}>
      <h2 className={styles.sectionTitle}>Image Recognition</h2>
      <h2 className={styles.sectionTitle}>Image Identification</h2>
      <h3 className={styles.questionText}>{question.questionText}</h3>
      
      <div className={styles.questionImage}>
        <img 
          src={`https://source.unsplash.com/300x200/?${question.correctAnswer.toLowerCase()}`} 
          alt="Question visual" 
        />
      </div>
      
      <div className={styles.optionsGrid}>
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            isSelected={selectedOption === option}
            isCorrect={option === question.correctAnswer}
            showResult={hasAnswered}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </div>
      
      {hasAnswered && (
        <motion.button
          className={styles.continueButton}
          onClick={() => onAnswer(selectedOption === question.correctAnswer)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Continue
        </motion.button>
      )}
    </div>
  )
}

export default ImageMatchQuestion