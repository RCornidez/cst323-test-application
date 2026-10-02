import { api } from "../api/apiClient"
import { USE_MOCKS } from "../config"
import { mockUsers } from "../mocks/users"
import type { User } from "../types/types"

export type NewUser = Omit<User, 'id'>

const httpUserRepository = {
  getAll: () => api.get<User[]>('/users'),
  getById: (id: number) => api.get<User>(`/users/${id}`),
  create: (data: NewUser) => api.post<User>('/users', data),
  update: (id: number, data: User) => api.put<User>(`/users/${id}`, data),
  delete: (id: number) => api.delete(`/users/${id}`)
}

type UserRepository = typeof httpUserRepository

let users = [...mockUsers]

const mockUserRepository: UserRepository= {
  getAll: async () => [...users],
  getById: async id => {
    const user = users.find(u => u.id === id)
    if (!user) throw new Error(`User ${id} not found`)
    return user
  },
  create: async data => {
    const user = { ...data, id: Math.max(0, ...users.map(u => u.id)) + 1}
    users.push(user)
    return user
  },
  update: async (id, data) => {
    users = users.map(u => (u.id === id ? data: u))
    return data
  },
  delete: async (id) => {
    users = users.filter(u => (u.id !== id))
  }
}

export const userRepository = USE_MOCKS ? mockUserRepository : httpUserRepository