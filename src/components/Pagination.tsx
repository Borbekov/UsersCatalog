import ReactPaginate from 'react-paginate'

type Props = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({ page, totalPages, onPageChange }: Props) => {
  if (totalPages <= 1) return null

  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={page - 1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      previousLabel="←"
      nextLabel="→"
      breakLabel="…"
      containerClassName="flex items-center justify-center gap-1 mt-8"
      pageClassName="cursor-pointer"
      pageLinkClassName="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
      activeLinkClassName="!bg-gray-900 !text-white"
      previousClassName="cursor-pointer"
      previousLinkClassName="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
      nextClassName="cursor-pointer"
      nextLinkClassName="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
      breakLinkClassName="w-9 h-9 flex items-center justify-center text-gray-400 text-sm select-none"
      disabledLinkClassName="opacity-30 cursor-not-allowed"
    />
  )
}
