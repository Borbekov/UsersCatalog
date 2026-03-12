export type User = {
  id: number
  firstName: string
  lastName: string
  age: number
  email: string
  phone: string
  image: string
  username: string
  company: {
    name: string
    title: string
    department: string
  }
  address: {
    city: string
    state: string
    country: string
  }
}

export type UsersResponse = {
  users: User[]
  total: number
  skip: number
  limit: number
}
