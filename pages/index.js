import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
// import Image from 'next/image'

// import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  // {siteMetadata.newsletter.provider !== '' && (
  //   <div className="flex items-center justify-center pt-4">
  //     <NewsletterForm />
  //   </div>
  // )}
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="container mx-auto flex flex-wrap items-center justify-center py-10 lg:py-0 lg:pb-5">
        <div className="mb-10 w-full overflow-hidden rounded-lg pr-5 align-middle lg:mb-0 lg:w-1/2">
          <h1 className="leading-20 md:leading-20 mb-8 text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl md:text-4xl ">
            Учись <span className="decoration-6 underline decoration-primary-500">Кодить</span>
            <br />
            Создавай Проекты
            <br />
            Получай Сертификаты
          </h1>
          <p className="text-l leading-7 text-gray-800 dark:text-gray-100">
            Онлайн школа программирования с открытыми курсами и сообществом. Твори искусство
            программирования вместе с Op-Onai
          </p>
          <div className="my-10 flex py-4">
            <a
              href="#pricing"
              className="mx-auto items-center rounded bg-primary-500 px-6 py-4 text-center text-xl font-semibold text-gray-100 hover:bg-primary-700 sm:mx-0"
            >
              Начать Бесплатно
            </a>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-lg p-0 lg:w-1/2 lg:p-10">
          <div className="aspect-h-16 aspect-w-9">
            <iframe
              src="https://www.youtube.com/embed/cKqi7ZjFKTQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/cKqi7ZjFKTQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 dark:bg-gray-900 lg:flex lg:justify-center lg:py-12">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:rounded-lg lg:shadow-lg">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:h-full lg:rounded-lg"
              style={{
                'background-image':
                  "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
              }}
            ></div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:w-1/2 lg:max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              Build Your New <span className="text-primary-600 dark:text-primary-400">Idea</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit
              vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia
              iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="transform rounded-md bg-gray-900 px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 hover:bg-gray-700"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto py-10">
          <h1 className="text-center text-3xl font-bold capitalize text-gray-800 dark:text-gray-100 lg:text-4xl">
            Чем наше обучение <br /> отличается от других?
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-8">
            <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
              <span className="inline-block rounded-full bg-primary-200 p-3 text-primary-600 dark:bg-primary-500 dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fillRule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-100">
                Взаимное Обучение
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Сообщество, в котором вы помогаете, делитесь советами и мотивируете друг-друга
              </p>

              <p className="text-gray-500 dark:text-gray-300">
                Не стесняйтесь спрашивать вопросы в{' '}
                <a
                  href="https://discord.gg/kag4mXFM7y"
                  className="text-primary-500 underline dark:text-primary-400"
                >
                  Discord
                </a>{' '}
                и{' '}
                <a
                  href="https://forum.op-onai.kz/"
                  className="text-primary-500 underline dark:text-primary-400"
                >
                  Форуме
                </a>
              </p>

              <p className="text-gray-500 dark:text-gray-300">
                Кратно повышает вашу мотивацию и успеваемость
              </p>

              <a
                href="blog/how-to-learn-coding"
                className="-mx-1 flex transform items-center text-sm capitalize text-primary-500 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-primary-400 dark:hover:text-primary-500"
              >
                <span className="mx-1">Подробнее</span>
                <svg
                  className="mx-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
              <span className="inline-block rounded-full bg-primary-200 p-3 text-primary-600 dark:bg-primary-500 dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-gray-100">
                Открытые Курсы
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Все асинхронные курсы бесплатны и доступны для всех на{' '}
                <a
                  href="https://edu.op-onai.kz"
                  className="text-primary-500 underline dark:text-primary-400"
                >
                  платформе
                </a>{' '}
                и{' '}
                <a
                  href="https://www.youtube.com/channel/UCWuZisT0SvyZSaLTtnR8aTA"
                  className="text-primary-500 underline dark:text-primary-400"
                >
                  YouTube
                </a>
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                Учитесь и Практикуйтесь в любое время и в любом месте
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                Для полной эффективности требует практики и сообщества
              </p>

              <a
                href="blog/how-to-learn-coding"
                className="-mx-1 flex transform items-center text-sm capitalize text-primary-500 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-primary-400 dark:hover:text-primary-500"
              >
                <span className="mx-1">Подробнее</span>
                <svg
                  className="mx-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
              <span className="inline-block rounded-full bg-primary-200 p-3 text-primary-600 dark:bg-primary-500 dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-gray-100">
                Взаимное Обучение
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod
                dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a
                href="blog/how-to-learn-coding"
                className="-mx-1 flex transform items-center text-sm capitalize text-primary-500 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-primary-400 dark:hover:text-primary-500"
              >
                <span className="mx-1">Подробнее</span>
                <svg
                  className="mx-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
            explore our <br /> awesome{' '}
            <span className="underline decoration-primary-500">Components</span>
          </h1>

          <p className="mt-4 text-gray-500 dark:text-gray-300 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-2 xl:gap-16">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                Copy & paste components
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod
                dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm capitalize text-primary-500 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-primary-400 dark:hover:text-primary-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="mx-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                Zero Configrations
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod
                dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm capitalize text-primary-500 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-primary-400 dark:hover:text-primary-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="mx-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                New Components Every month
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod
                dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm capitalize text-primary-500 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-primary-400 dark:hover:text-primary-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="mx-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                elegant Dark Mode
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod
                dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm capitalize text-primary-500 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-primary-400 dark:hover:text-primary-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="mx-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto py-10">
          <h1 className="text-center text-3xl font-bold capitalize text-gray-800 dark:text-gray-100 lg:text-4xl">
            Как проходит обучение на платформе Op-Onai
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-4 xl:gap-8">
            <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white pt-3 shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <div className="mb-3 flex h-8 w-8 flex-wrap items-center justify-center rounded-full bg-primary-200 text-center font-bold text-primary-700 dark:bg-primary-500 dark:text-gray-100">
                  <span className=" text-xl">1</span>
                </div>
                <div className="h-48">
                  <h1 className="text-lg font-bold uppercase text-gray-800 dark:text-white">
                    Смотрите материалы в удобное время
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Изучаете теорию и практикуетесь на задачах, приближённых к реальным.
                  </p>
                </div>
              </div>

              <img
                className="mt-2 w-full object-cover"
                src="/static/images/edu-op-onai.png"
                alt="NIKE AIR"
              />
            </div>
            <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white pt-3 shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <div className="mb-3 flex h-8 w-8 flex-wrap items-center justify-center rounded-full bg-primary-200 text-center font-bold text-primary-700 dark:bg-primary-500 dark:text-gray-100">
                  <span className=" text-xl">2</span>
                </div>
                <div className="h-48">
                  <h1 className="text-lg font-bold uppercase text-gray-800 dark:text-white">
                    TEST
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Изучаете теорию и практикуетесь на задачах, приближённых к реальным.
                  </p>
                </div>
              </div>

              <img
                className="mt-2 w-full object-cover"
                src="/static/images/edu-op-onai.png"
                alt="NIKE AIR"
              />
            </div>
            <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white pt-3 shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <div className="mb-3 flex h-8 w-8 flex-wrap items-center justify-center rounded-full bg-primary-200 text-center font-bold text-primary-700 dark:bg-primary-500 dark:text-gray-100">
                  <span className=" text-xl">3</span>
                </div>
                <div className="h-48">
                  <h1 className="text-lg font-bold uppercase text-gray-800 dark:text-white">
                    Смотрите материалы в удобное время
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Изучаете теорию и практикуетесь на задачах, приближённых к реальным.
                  </p>
                </div>
              </div>

              <img
                className="mt-2 w-full object-cover"
                src="/static/images/edu-op-onai.png"
                alt="NIKE AIR"
              />
            </div>
            <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white pt-3 shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <div className="mb-3 flex h-8 w-8 flex-wrap items-center justify-center rounded-full bg-primary-200 text-center font-bold text-primary-700 dark:bg-primary-500 dark:text-gray-100">
                  <span className=" text-xl">4</span>
                </div>
                <div className="h-48">
                  <h1 className="text-lg font-bold uppercase text-gray-800 dark:text-white">
                    Смотрите материалы в удобное время
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Изучаете теорию и практикуетесь на задачах, приближённых к реальным.
                  </p>
                </div>
              </div>

              <img
                className="mt-2 w-full object-cover"
                src="/static/images/edu-op-onai.png"
                alt="NIKE AIR"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div>
          <h2
            id="pricing"
            className="my-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-4xl"
          >
            Начни кодить <span className="underline decoration-primary-500">сейчас</span>.
          </h2>
        </div>
        <div className=" mx-auto mb-20 flex flex-wrap">
          <div className="w-full p-4 md:w-1/2 lg:w-1/3 ">
            <div className="rounded-xl bg-gray-100 p-8 dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Free</h2>
              <h5 className="py-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">
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
                    viewBox="0 0 16 16"
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
                    viewBox="0 0 16 16"
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
                    viewBox="0 0 16 16"
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
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                  </svg>{' '}
                  Сертификаты от Курсов{' '}
                </p>
              </div>
              <a
                href="https://edu.op-onai.kz"
                className="my-4 block w-full rounded bg-primary-500 px-4 py-2 text-center text-gray-100 hover:bg-primary-700"
              >
                {' '}
                Регистрация{' '}
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <div className="rounded-xl bg-gray-100 p-8 dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Lite</h2>
              <h5 className="py-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">
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
                    viewBox="0 0 16 16"
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
                    viewBox="0 0 16 16"
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
                    viewBox="0 0 16 16"
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
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                  </svg>{' '}
                  Доступ к Agile-платформе{' '}
                </p>
              </div>
              <Link
                href="https://forms.op-onai.kz/index.php/973436?lang=ru"
                className="my-4 block w-full rounded bg-primary-500 px-4 py-2 text-center text-gray-100 hover:bg-primary-700"
              >
                {' '}
                Подписаться{' '}
              </Link>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/3 ">
            <div className="rounded-xl bg-gray-100 p-8 dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Pro (в разработке)
              </h2>
              <h5 className="py-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">
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
                    viewBox="0 0 16 16"
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
                    viewBox="0 0 16 16"
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
                    viewBox="0 0 16 16"
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
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                  </svg>{' '}
                  Подготовка к рынку труда{' '}
                </p>
              </div>
              <a
                href="#"
                className="my-4 block w-full rounded bg-gray-400 px-4 py-2 text-center text-gray-100 hover:bg-gray-600 dark:bg-gray-500 hover:dark:bg-gray-700"
              >
                {' '}
                В Разработке{' '}
              </a>
            </div>
          </div>
          <p className="mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Есть вопросы? Пишите нам в чате-виджете на правом нижнем углу или в{' '}
            <a
              href="https://t.me/oponaisupportbot"
              className="text-primary-500 underline decoration-primary-500 dark:text-primary-400"
            >
              поддержке Telegram
            </a>
          </p>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-3xl font-bold capitalize text-gray-800 dark:text-white lg:text-4xl">
            Команда Op-Onai
          </h1>

          <p className="mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Как вы поняли, мы ищем молодые таланты. Пишите нам по чату-виджету или Telegram
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
            <div className="group flex transform cursor-pointer flex-col items-center rounded-xl border p-8 transition-colors duration-200 hover:bg-gray-600 dark:border-gray-700 dark:hover:bg-gray-800">
              <img
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="static/images/authors/indicozy.jpg"
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                Беркут
              </h1>

              <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
                Team Lead
              </p>

              <div className="-mx-2 mt-3 flex">
                <a
                  href="https://github.com/indicozy"
                  className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                  aria-label="Github"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="group flex transform cursor-pointer flex-col items-center rounded-xl border p-8 transition-colors duration-200 hover:bg-gray-600 dark:border-gray-700 dark:hover:bg-gray-800">
              <img
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="static/images/authors/indicozy.jpg"
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                Беркут
              </h1>

              <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
                ведущий разработчик
              </p>

              <div className="-mx-2 mt-3 flex">
                <a
                  href="https://github.com/indicozy"
                  className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                  aria-label="Github"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="group flex transform cursor-pointer flex-col items-center rounded-xl border p-8 transition-colors duration-200 hover:bg-gray-600 dark:border-gray-700 dark:hover:bg-gray-800">
              <img
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="static/images/authors/indicozy.jpg"
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                Беркут
              </h1>

              <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
                Дизайн/Маркетинг
              </p>

              <div className="-mx-2 mt-3 flex">
                <a
                  href="https://github.com/indicozy"
                  className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                  aria-label="Github"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-4xl md:leading-14">
            Последние Новости
          </h2>
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
                      <dt className="sr-only">Опубликовано в</dt>
                      <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-200">
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
                        <div className="prose max-w-none text-gray-700 dark:text-gray-200">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Подробнее &rarr;
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
            aria-label="Все Посты"
          >
            Все Посты &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
