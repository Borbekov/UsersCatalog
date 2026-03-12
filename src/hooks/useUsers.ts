import { useState, useEffect } from 'react'
import type { User, UsersResponse } from '../types'

const LIMIT = 9
const BASE = 'https://dummyjson.com'

type State = {
  users: User[]
  total: number
  isLoading: boolean
  isError: boolean
}

const INITIAL_STATE: State = {
  users: [],
  total: 0,
  isLoading: true,
  isError: false,
}

const buildUrl = (query: string, page: number): string => {
  const skip = (page - 1) * LIMIT
  const params = new URLSearchParams({ limit: String(LIMIT), skip: String(skip) })
  const trimmed = query.trim()

  if (trimmed) {
    params.set('q', trimmed)
    return `${BASE}/users/search?${params}`
  }

  return `${BASE}/users?${params}`
}

export const useUsers = (query: string, page: number) => {
  const [state, setState] = useState<State>(INITIAL_STATE)

  useEffect(() => {
    const controller = new AbortController()

    setState((s) => ({ ...s, isLoading: true, isError: false }))

    fetch(buildUrl(query, page), { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as Promise<UsersResponse>
      })
      .then(({ users, total }) => {
        setState({ users, total, isLoading: false, isError: false })
      })
      .catch((err: Error) => {
        if (err.name !== 'AbortError') {
          setState({ users: [], total: 0, isLoading: false, isError: true })
        }
      })

    return () => controller.abort()
  }, [query, page])

  return state
}