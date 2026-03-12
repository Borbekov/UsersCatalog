import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type Props = {
  value: string
  total: number | null
  onChange: (value: string) => void
}

export const SearchBar = ({ value, total, onChange }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
      <div className="relative w-full sm:w-80">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Поиск по имени..."
          className="w-full rounded-xl border border-gray-200 pl-9 pr-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>
      {total !== null && (
        <p className="text-sm text-gray-500 whitespace-nowrap">
          Найдено: <span className="font-medium text-gray-800">{total} пользователей</span>
        </p>
      )}
    </div>
  )
}
