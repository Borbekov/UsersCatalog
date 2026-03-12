type Props = {
  type: 'empty' | 'error'
  query?: string
}

export const EmptyState = ({ type, query }: Props) => {
  if (type === 'error') {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-24 text-center gap-3">
        <p className="text-base font-semibold text-gray-700">Не удалось загрузить данные</p>
      </div>
    )
  }

  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center gap-3">
      <p className="text-base font-semibold text-gray-700">
        {query ? `По запросу «${query}» ничего не найдено` : 'Пользователи не найдены'}
      </p>
    </div>
  )
}
