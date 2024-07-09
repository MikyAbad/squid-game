export const login = (name) => {
  const user = JSON.parse(localStorage.getItem(name)) || { name: name.trim(), score: 0, maxScore: 0 }
  localStorage.setItem(name, JSON.stringify(user))
  localStorage.setItem('currentUser', JSON.stringify(user))
  return user
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'))
}

export const saveScore = (user) => {
  const { name, score, maxScore } = user
  const updatedUser = { name, score, maxScore }
  localStorage.setItem(name, JSON.stringify(updatedUser))
  localStorage.setItem('currentUser', JSON.stringify(updatedUser))
}
