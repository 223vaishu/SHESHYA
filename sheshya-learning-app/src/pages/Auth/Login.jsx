import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyLogin } from '../../data/dummyQuestions'

const Login = ({ setIsAuthenticated }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const { token } = await dummyLogin()
      localStorage.setItem('authToken', token)
      setIsAuthenticated(true)
      navigate('/game')
    } catch (error) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <h1>Welcome to Sheshya</h1>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login with Test Account'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  )
}

export default Login