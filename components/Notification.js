export default function Notification({ status, text }) {
  var bg_lg = ''
  var bg_md = ''
  var bg_sm = ''
  var header = ''
  if (status == 'success') {
    bg_sm = 'bg-green-500'
    bg_md = 'bg-green-800'
    bg_lg = 'bg-green-600'
    header = 'Успех'
  } else if (status == 'error') {
    bg_sm = 'bg-red-500'
    bg_md = 'bg-red-800'
    bg_lg = 'bg-red-600'
    header = 'Ошибка'
  }

  return (
    <div className={`${bg_lg} py-4 text-center lg:px-4`}>
      <div
        className={`p-2 ${bg_md} flex items-center leading-none text-indigo-100 lg:inline-flex lg:rounded-full`}
        role="alert"
      >
        <span className={`flex rounded-full uppercase ${bg_sm} mr-3 px-2 py-1 text-xs font-bold`}>
          {header}
        </span>
        <span className="mr-2 flex-auto text-left font-semibold">{text}</span>
      </div>
    </div>
  )
}
