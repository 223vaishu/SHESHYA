export const dummyQuestions = [
  {
    id: 1,
    type: 'image_match',
    questionText: 'What do you See?',
    options: ['Owl', 'Pigeon', 'Hawk', 'Parrot', 'Vulture'],
    correctAnswer: 'Owl'
  },
  {
    id: 2,
    type: 'image_match',
    questionText: 'Identify this bird',
    options: ['Owl', 'Pigeon', 'Eagle', 'Parrot', 'Vulture'],
    correctAnswer: 'Pigeon'
  }
]

export const dummyLogin = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: 'dummy-token-123' })
    }, 1000)
  })
}

export const dummyCourseContent = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ questions: dummyQuestions })
    }, 500)
  })
}