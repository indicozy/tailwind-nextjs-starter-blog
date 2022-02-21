import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
// import Image from 'next/image'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Научись программировать.{' '}
          <span className="underline decoration-primary-500">Бесплатно</span>.
        </h1>
        <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Создавай Проекты.
        </h2>
        <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Получай Сертификаты.
        </h2>
        <p className="text-xl leading-7 text-gray-500 dark:text-gray-300">
          Онлайн открытые курсы и сообщество о навыках в индустрии IT. Начни свое путешествие в
          разработке с Op-Onai.
        </p>
        <div className="mb-20 pt-10 sm:mb-20">
          <a
            href="https://edu.op-onai.kz"
            className="rounded bg-black px-4 py-3 text-sm font-bold text-gray-100 ring-offset-indigo-700 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-white dark:text-gray-900 sm:px-8 lg:text-xl"
          >
            Начать
          </a>
        </div>
      </div>
      <div className="aspect-w-16 aspect-h-9 mt-3 mb-20 grid place-items-center">
        <iframe
          src="https://www.youtube.com/embed/UBOj6rqRUME"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-wrap py-24">
          <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
            <img
              alt="feature"
              className="h-full w-full object-cover object-center"
              src="/static/images/edu-op-onai.png"
            />
          </div>
          <div className="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
            <h2 className="mb-5 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
              Курсы: Op-Onai Camp
            </h2>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-lg font-bold font-medium tracking-tight text-gray-900 dark:text-gray-100">
                  100% Бесплатно
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-500 dark:text-gray-300">
                  Смотри обучающие видео, практикуйся сам, проходи мини тесты
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-lg font-bold font-medium tracking-tight text-gray-900 dark:text-gray-100">
                  Асинхронное Обучение
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-500 dark:text-gray-300">
                  Учись где угодно и когда угодно. Платформа адаптирована для мобильных приложении
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-lg font-bold font-medium tracking-tight text-gray-900 dark:text-gray-100">
                  Получай Сертификаты
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-500 dark:text-gray-300">
                  Завершай курсы и получай собственную страницу с пройденными курсами
                </p>
                <a
                  href="https://edu.op-onai.kz"
                  className="my-4 block w-full rounded bg-primary-500 px-4 py-2 text-center text-white hover:bg-primary-700"
                >
                  {' '}
                  Войти{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-wrap py-24">
          <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
            <img
              alt="feature"
              className="h-full w-full object-cover object-center"
              src="/static/images/forum-op-onai.png"
            />
          </div>
          <div className="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
            <h2 className="mb-5 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
              Сообщество: Discord, Форум
            </h2>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-lg font-bold font-medium tracking-tight text-gray-900 dark:text-gray-100">
                  Задавай вопросы
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-500 dark:text-gray-300">
                  Находи ответы на любые вопросы связанные с IT
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-lg font-bold font-medium tracking-tight text-gray-900 dark:text-gray-100">
                  Делись идеями и решениями
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-500 dark:text-gray-300">
                  Помогай другим отвечая на вопросы, делясь решениями или ресурсами
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-lg font-bold font-medium tracking-tight text-gray-900 dark:text-gray-100">
                  {' '}
                  Оставляй отзывы{' '}
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-500 dark:text-gray-300">
                  Поделись своим опытом обучения в op-onai.kz
                </p>
                <a
                  href="https://forum.op-onai.kz"
                  className="my-4 block w-full rounded bg-primary-500 px-4 py-2 text-center text-white hover:bg-primary-700"
                >
                  {' '}
                  Форум{' '}
                </a>
                <a
                  href="https://discord.gg/kag4mXFM7y"
                  className="my-4 block w-full rounded bg-primary-500 px-4 py-2 text-center text-white hover:bg-primary-700"
                >
                  {' '}
                  Discord{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-wrap py-24">
          <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
            <img
              alt="feature"
              className="my-2 h-full w-full object-cover object-center"
              src="/static/images/agile-op-onai.png"
            />
          </div>
          <div className="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
            <h2 className="mb-5 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
              Коллаборации: Agile + Design
            </h2>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-lg font-bold font-medium tracking-tight text-gray-900 dark:text-gray-100">
                  Запускай Проекты
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-500 dark:text-gray-300">
                  Разделяйте задачи и следите за соучастниками в удобной платформе Scrum
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-lg font-bold font-medium tracking-tight text-gray-900 dark:text-gray-100">
                  Рисуй Дизайны и Шаблоны
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-500 dark:text-gray-300">
                  {' '}
                  [Beta] Составляйте дизайн всей командой онлайн
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-lg font-bold font-medium tracking-tight text-gray-900 dark:text-gray-100">
                  {' '}
                  Следи за Другими Проектами{' '}
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-500 dark:text-gray-300">
                  Смотри за примерами и успехами друзей в{' '}
                  <a
                    href="https://agile.op-onai.kz/discover"
                    className="underline decoration-primary-500"
                  >
                    agile.op-onai.kz/discover
                  </a>{' '}
                </p>
                <a
                  href="https://agile.op-onai.kz"
                  className="my-4 block w-full rounded bg-primary-500 px-4 py-2 text-center text-white hover:bg-primary-700"
                >
                  {' '}
                  Agile{' '}
                </a>
                <a
                  href="https://design.op-onai.kz"
                  className="my-4 block w-full rounded bg-primary-500 px-4 py-2 text-center text-white hover:bg-primary-700"
                >
                  {' '}
                  Design{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto mb-20 flex flex-wrap">
        <h2 className="my-10 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Чего ты ждешь? Начни <span className="underline decoration-primary-500">сейчас.</span>
        </h2>
        <div className="w-full p-4 md:w-1/2 lg:w-1/3 ">
          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Free</h2>
            <h5 className="py-2 text-5xl font-semibold text-gray-700 dark:text-gray-300">
              0₸<small className="text-lg">/навсегда</small>
            </h5>
            <hr />
            <div className="my-4 flex flex-col items-center text-base">
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Курсы &nbsp;{' '}
                <a
                  href="https://edu.op-onai.kz"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-primary-500"
                >
                  {' '}
                  edu.op-onai.kz{' '}
                </a>{' '}
              </p>
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Сообщество в &nbsp;{' '}
                <a
                  href="https://discord.gg/kag4mXFM7y"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-primary-500"
                >
                  {' '}
                  Discord{' '}
                </a>{' '}
              </p>
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Форум &nbsp;{' '}
                <a
                  href="https://forum.op-onai.kz/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-primary-500"
                >
                  {' '}
                  forum.op-onai.kz{' '}
                </a>{' '}
              </p>
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Сертификаты от Курсов{' '}
              </p>
            </div>
            <a
              href="https://edu.op-onai.kz"
              className="my-4 block w-full rounded bg-primary-500 px-4 py-2 text-center text-white hover:bg-primary-700"
            >
              {' '}
              Начать{' '}
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 ">
          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Lite</h2>
            <h5 className="py-2 text-5xl font-semibold text-gray-700 dark:text-gray-300">
              8,500₸<small className="text-lg">/мес.</small>
            </h5>
            <hr />
            <div className="my-4 flex flex-col items-center text-base">
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Включает пакет Free{' '}
              </p>
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Поддержка менторов{' '}
              </p>
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Совместная разработка{' '}
              </p>
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Доступ к Agile-платформе{' '}
              </p>
            </div>
            <Link
              href="/blog/official/lite-how-to"
              className="my-4 block w-full rounded bg-primary-500 px-4 py-2 text-center text-white hover:bg-primary-700"
            >
              {' '}
              Подписаться{' '}
            </Link>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/2 lg:w-1/3 ">
          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Pro (в разработке)
            </h2>
            <h5 className="py-2 text-5xl font-semibold text-gray-700 dark:text-gray-300">
              {' '}
              ???₸<small className="text-lg">/мес.</small>
            </h5>
            <hr />
            <div className="my-4 flex flex-col items-center text-base">
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Включает пакет Lite{' '}
              </p>
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Реальные проекты{' '}
              </p>
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Разработка с менторами{' '}
              </p>
              <p className="my-1 flex w-full items-center">
                <svg
                  className="mr-2 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewbox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>{' '}
                Подготовка к рынку труда{' '}
              </p>
            </div>
            <a
              href="#"
              className="my-4 block w-full rounded bg-gray-500 px-4 py-2 text-center text-white hover:bg-gray-700"
            >
              {' '}
              В Разработке{' '}
            </a>
          </div>
        </div>
      </section>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Последние Новости
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
