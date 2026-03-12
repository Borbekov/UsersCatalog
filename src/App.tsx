import { useState } from 'react'
import { Header } from './components/Header'
import { UserList } from './components/UserList'
import { Pagination } from './components/Pagination'
import { SearchBar } from './components/SearchBar'
import { useUsers } from './hooks/useUsers'
import { useDebounce } from './hooks/useDebounce'

const LIMIT = 9

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [page, setPage] = useState(1)
  const query = useDebounce(inputValue, 400)

  const { users, total, isLoading, isError } = useUsers(query, page)
  const totalPages = Math.ceil(total / LIMIT)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8">

        <Header />

        <SearchBar
          value={inputValue}
          total={!isLoading && !isError ? total : null}
          onChange={(value) => { setInputValue(value); setPage(1) }}
        />

        <UserList users={users} isLoading={isLoading} isError={isError} query={query} />

        {!isLoading && !isError && (
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        )}

      </div>
    </div>
  )
}

export default App
