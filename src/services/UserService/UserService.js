import { CURRENT_USER } from '../../constants'

export const login = (name) => {
  const user = JSON.parse(localStorage.getItem(name)) || { name: name.trim(), score: 0, maxScore: 0 }
  localStorage.setItem(name, JSON.stringify(user))
  localStorage.setItem(CURRENT_USER, JSON.stringify(user))
  return user
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER))
}

export const saveScore = (user) => {
  const { name, score, maxScore } = user
  const updatedUser = { name, score, maxScore }
  localStorage.setItem(name, JSON.stringify(updatedUser))
  localStorage.setItem(CURRENT_USER, JSON.stringify(updatedUser))
}

export const getAllUsers = () => {
  const users = []

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key !== CURRENT_USER) {
      const user = JSON.parse(localStorage.getItem(key))
      users.push(user)
    }
  }

  return users.sort((a, b) => b.maxScore - a.maxScore) || []
}
