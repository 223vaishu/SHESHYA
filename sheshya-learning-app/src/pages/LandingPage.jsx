import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="landing-container">
      <h1>Sheshya Learning App</h1>
      <p>Interactive learning for KG1 students</p>
      <button onClick={() => navigate('/login')}>Get Started</button>
    </div>
  )
}

export default LandingPage