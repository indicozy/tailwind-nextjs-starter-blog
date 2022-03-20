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
            Учись <span className="decoration-6 underline decoration-primary-500">Кодить</span>.
            <br />
            Создавай Проекты.
            <br />
            Получай Сертификаты.
          </h1>
          <p className="text-l leading-7 text-gray-800 dark:text-gray-100">
            Онлайн школа программирования с открытыми курсами и сообществом. Твори искусство
            программирования вместе с Op-Onai.
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

      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto py-10">
          <h1 className="text-center text-3xl font-bold capitalize text-gray-800 dark:text-gray-100 lg:text-4xl">
            Чем наше обучение <br /> отличается от других?
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-8">
            <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-100">
                Проекты и Практика
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod
                dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a
                href="#"
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
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-gray-100">
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
                Для полной эффективности требует{' '}
                <a
                  href="blog/how-to-learn-coding"
                  className="text-primary-500 underline dark:text-primary-400"
                >
                  практики и сообщества
                </a>
              </p>

              <a
                href="#"
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
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-gray-100">
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

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-gray-100">
                Взаимное Обучение
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod
                dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a
                href="#"
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
      <section className="body-font">
        <div className="container mx-auto flex flex-wrap py-10">
          <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
            <img
              alt="feature"
              className="h-full w-full object-cover object-center"
              src="/static/images/edu-op-onai.png"
            />
          </div>
          <div className="flex flex-col flex-wrap text-left lg:w-1/2 lg:py-6 lg:pl-12">
            <h2 className="mb-8 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Курсы: Op-Onai Camp
            </h2>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  100% Бесплатно
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-700 dark:text-gray-200">
                  Смотри обучающие видео, практикуйся сам, проходи мини тесты
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Асинхронное Обучение
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-700 dark:text-gray-200">
                  Учись где угодно и когда угодно. Платформа адаптирована для мобильных приложении
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Получай Сертификаты
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-700 dark:text-gray-200">
                  Завершай курсы и получай собственную страницу с пройденными курсами
                </p>
              </div>
            </div>
            <div className="w-full">
              <a
                href="https://edu.op-onai.kz"
                className="mt-4 block w-full rounded bg-primary-500 py-2 text-center text-gray-100 hover:bg-primary-700"
              >
                {' '}
                Войти{' '}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font">
        <div className="container mx-auto flex flex-wrap py-10">
          <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
            <img
              alt="feature"
              className="h-full w-full object-cover object-center"
              src="/static/images/forum-op-onai.png"
            />
          </div>
          <div className="flex flex-col flex-wrap text-left lg:w-1/2 lg:py-6 lg:pl-12">
            <h2 className="mb-8 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Сообщество: Discord + Форум
            </h2>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Задавай вопросы
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-700 dark:text-gray-200">
                  Находи ответы на любые вопросы связанные с IT
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Делись идеями и решениями
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-700 dark:text-gray-200">
                  Помогай другим отвечая на вопросы, делясь решениями или ресурсами
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {' '}
                  Оставляй отзывы{' '}
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-700 dark:text-gray-200">
                  Поделись своим опытом обучения в op-onai.kz
                </p>
              </div>
            </div>
            <div className="w-full">
              <a
                href="https://forum.op-onai.kz"
                className="mt-4 block w-full rounded bg-primary-500 py-2 text-center text-gray-100 hover:bg-primary-700"
              >
                {' '}
                Форум{' '}
              </a>
              <a
                href="https://discord.gg/kag4mXFM7y"
                className="mt-4 block w-full rounded bg-primary-500 py-2 text-center text-gray-100 hover:bg-primary-700"
              >
                {' '}
                Discord{' '}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font">
        <div className="container mx-auto flex flex-wrap py-10">
          <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
            <img
              alt="feature"
              className="h-full w-full object-cover object-center"
              src="/static/images/agile-op-onai.png"
            />
          </div>
          <div className="flex flex-col flex-wrap text-left lg:w-1/2 lg:py-6 lg:pl-12">
            <h2 className="mb-8 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Проекты: Agile + Design
            </h2>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Запускай Проекты
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-700 dark:text-gray-200">
                  Разделяйте задачи и следите за соучастниками в удобной платформе Scrum
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Рисуй Дизайны и Шаблоны
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-700 dark:text-gray-200">
                  [Beta] Составляйте дизайн всей командой онлайн
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="flex-grow">
                <h3 className="title-font mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Следи за Другими Проектами
                </h3>
                <p className="text-base text-xl leading-relaxed leading-7 text-gray-700 dark:text-gray-200">
                  Смотри за примерами и успехами друзей в{' '}
                  <a
                    href="https://agile.op-onai.kz/discover"
                    className="underline decoration-primary-500"
                  >
                    agile.op-onai.kz/discover
                  </a>{' '}
                </p>
              </div>
            </div>
            <div className="w-full ">
              <a
                href="https://agile.op-onai.kz"
                className="mt-4 block w-full rounded bg-primary-500 py-2 text-center text-gray-100 hover:bg-primary-700"
              >
                {' '}
                Agile{' '}
              </a>
              <a
                href="https://design.op-onai.kz"
                className="mt-4 block w-full rounded bg-primary-500 py-2 text-center text-gray-100 hover:bg-primary-700"
              >
                {' '}
                Design{' '}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-3xl font-bold capitalize text-gray-800 dark:text-white lg:text-4xl">
            Команда Op-Onai
          </h1>

          <p className="mx-auto my-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
            Как вы поняли, мы ищем молодые таланты
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
        </div>
      </section>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
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
