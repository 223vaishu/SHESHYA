import axios from 'axios'

const API_BASE = 'https://ai-qna-gvhkarb0faf3fvhs.eastus-01.azurewebsites.net'
const AUTH_URL = 'https://sheshya-backend-f4gndddgadfhc3fy.eastus-01.azurewebsites.net/loginByEmailOrPhone'

export const login = async () => {
  try {
    const response = await axios.post(AUTH_URL, {
      email: "testStudent@sheshya.in",
      phone: "",
      otp: "123456"
    })
    return response.data.token
  } catch (error) {
    throw new Error('Login failed')
  }
}

export const getCourseContent = async (token, className = 'KG1') => {
  try {
    const response = await axios.post(
      `${API_BASE}/createCourseContent`,
      { className },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch course content')
  }
}