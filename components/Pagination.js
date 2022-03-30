import Link from '@/components/Link'
import is from 'sharp/lib/is'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)
  function createPage(pageNumber, text, isActive) {
    if (isActive) {
      return (
        <li key={'Page' + text}>
          <a
            aria-current="page"
            className="border border-gray-300 bg-blue-50 py-2 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            {text}
          </a>
        </li>
      )
    }
    return (
      <li key={'Page' + text}>
        <a
          href={pageNumber}
          className="border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {text}
        </a>
      </li>
    )
  }
  function generateList() {
    var listItems = []

    listItems.push(
      createPage(
        currentPage - 1 < 1 ? `/blog/` : `/blog/page/${currentPage - 1}`,
        'Пред',
        currentPage - 1 < 1
      )
    )

    var listMin = Math.max(1, currentPage)
    for (let i = Math.max(1, currentPage - 2); i < Math.min(currentPage + 3, totalPages + 1); i++) {
      listItems.push(createPage(i, i, parseInt(currentPage) === i))
    }

    listItems.push(
      createPage(
        currentPage + 1 > totalPages
          ? `/blog/page/${currentPage}`
          : `/blog/page/${currentPage + 1}`,
        'След',
        currentPage + 1 > totalPages
      )
    )

    return <ul className="mx-auto inline-flex -space-x-px py-2">{listItems}</ul>
  }

  return (
    <div>
      <div>
        <nav className="flex items-center justify-center">{generateList()}</nav>
      </div>
    </div>
  )
}
