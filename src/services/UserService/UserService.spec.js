import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { login, getCurrentUser, saveScore } from './UserService'

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
    localStorage.setItem('currentUser', JSON.stringify(dummyUser))

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

    const currentDummyUser = JSON.parse(localStorage.getItem('currentUser'))
    expect(currentDummyUser.score).toBe(10)
    expect(currentDummyUser.maxScore).toBe(20)
  })
})
