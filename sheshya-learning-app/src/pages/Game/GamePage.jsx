import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyCourseContent } from '../../data/dummyQuestions'
import ProgressBar from '../../components/Layout/ProgressBar'
import ImageMatchQuestion from '../../components/Game/ImageMatchQuestion'

const GamePage = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dummyCourseContent()
        setQuestions(data.questions || [])
      } catch (error) {
        console.error('Error loading questions:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 10)
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      alert(`Game completed! Your score: ${score}`)
      navigate('/')
    }
  }

  if (loading) return <div className="loading">Loading questions...</div>
  if (!questions.length) return <div className="no-questions">No questions available</div>

  return (
    <div className="game-container">
      <ProgressBar progress={(currentQuestionIndex + 1) / questions.length} />
      <ImageMatchQuestion 
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
      <div className="score-display">Score: {score}</div>
    </div>
  )
}

export default GamePage