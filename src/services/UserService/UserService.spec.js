import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { login, getCurrentUser, saveScore, getAllUsers } from './UserService'
import { CURRENT_USER } from '../../constants'

const clearLocalStorage = () => { localStorage.clear() }

describe('GIVEN UserService service', () => {
  beforeEach(() => { clearLocalStorage() })
  afterEach(() => { clearLocalStorage() })

  it('SHOULD store a new user in localStorage using login', () => {
    const dummyName = 'dummyUser'
    const dummyUser = login(dummyName)
    expect(dummyUser.name).toBe(dummyName)
    expect(dummyUser.score).toBe(0)
    expect(dummyUser.maxScore).toBe(0)

    const storedDummyUser = JSON.parse(localStorage.getItem(dummyName))
    expect(storedDummyUser).toEqual(dummyUser)
  })

  it('SHOULD return the current user from localStorage using getCurrentUser', () => {
    const dummyName = 'dummyUser'
    const dummyUser = { name: dummyName, score: 10, maxScore: 20 }
    localStorage.setItem(CURRENT_USER, JSON.stringify(dummyUser))

    const currentDummyUser = getCurrentUser()
    expect(currentDummyUser).toEqual(dummyUser)
  })

  it('SHOULD save the user score to localStorage using saveScore', () => {
    const dummyName = 'dummyUser'
    const dummyUser = login(dummyName)
    dummyUser.score = 10
    dummyUser.maxScore = 20

    saveScore(dummyUser)

    const storedDummyUser = JSON.parse(localStorage.getItem(dummyName))
    expect(storedDummyUser.score).toBe(10)
    expect(storedDummyUser.maxScore).toBe(20)
  })

  it('SHOULD update the currentUser in localStorage when saving score', () => {
    const dummyName = 'dummyUser'
    const dummyUser = login(dummyName)
    dummyUser.score = 10
    dummyUser.maxScore = 20

    saveScore(dummyUser)

    const currentDummyUser = JSON.parse(localStorage.getItem(CURRENT_USER))
    expect(currentDummyUser.score).toBe(10)
    expect(currentDummyUser.maxScore).toBe(20)
  })

  it('SHOULD return all users except the current user key sorted by maxScore', () => {
    const currentUser = { name: 'user1', maxScore: 100 }
    const user1 = { name: 'user1', maxScore: 100 }
    const user2 = { name: 'user2', maxScore: 200 }
    const leaderboardUsers = [
      { name: 'user2', maxScore: 200 },
      { name: 'user1', maxScore: 100 }
    ]

    localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser))
    localStorage.setItem('user1', JSON.stringify(user1))
    localStorage.setItem('user2', JSON.stringify(user2))

    const result = getAllUsers()

    expect(result).toHaveLength(2)
    expect(result).toEqual(expect.arrayContaining(leaderboardUsers))
  })

  it('SHOULD return an empty array if there are no other users', () => {
    const currentUser = { name: 'user1', maxScore: 100 }

    localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser))

    const result = getAllUsers()

    expect(result).toHaveLength(0)
  })

  it('SHOULD return an empty array if localStorage is empty', () => {
    const result = getAllUsers()

    expect(result).toHaveLength(0)
  })
})
