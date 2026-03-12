import type { User } from '../types'
import { UserCard } from './UserCard'
import { Skeleton } from './Skeleton'
import { EmptyState } from './EmptyState'

type Props = {
  users: User[]
  isLoading: boolean
  isError: boolean
  query?: string
}

export const UserList = ({ users, isLoading, isError, query }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {isLoading && <Skeleton />}

      {!isLoading && isError && <EmptyState type="error" />}

      {!isLoading && !isError && users.length === 0 && (
        <EmptyState type="empty" query={query} />
      )}

      {!isLoading && !isError && users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
