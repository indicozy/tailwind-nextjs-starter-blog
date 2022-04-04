import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'

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
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=77474217251"
          className="fill-gray-600 text-gray-100 transition-colors duration-200 hover:fill-primary-500 dark:fill-gray-300 dark:hover:fill-primary-400"
        >
          <div className="fixed bottom-10 right-10 z-10 flex h-16 w-16 animate-pulse items-center rounded-full bg-primary-400 p-4 dark:bg-primary-500 sm:h-20 sm:w-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </div>
        </a>
      </div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="container mx-auto flex flex-wrap items-center justify-center py-10 lg:py-0 lg:pb-5">
        <div className="mb-10 w-full overflow-hidden rounded-lg pr-5 align-middle lg:mb-0 lg:w-3/5">
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
              className="text-md mx-auto items-center rounded bg-primary-500 px-4 py-4 text-center font-semibold text-gray-100 hover:bg-primary-700 sm:mx-0"
            >
              Начать Бесплатно
            </a>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-end overflow-hidden rounded-lg p-0 lg:w-2/5 lg:p-5	">
          <div className="aspect-h-16 aspect-w-9 w-full">
            <iframe
              src="https://www.youtube.com/embed/cKqi7ZjFKTQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
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
                Проекты и Практика
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Разрабатывайте проекты с менторами, которые будут вашим Менеджером Проекта
              </p>

              <p className="text-gray-500 dark:text-gray-300">
                Методика TDD (Разработка через Тесты) и Agile (Scrum)
              </p>

              <p className="text-gray-500 dark:text-gray-300">
                Разрабатывайте проекты на платформах{' '}
                <a
                  href="https://agile.op-onai.kz"
                  className="text-primary-500 underline dark:text-primary-400"
                >
                  Agile
                </a>
                ,{' '}
                <a
                  href="https://design.op-onai.kz"
                  className="text-primary-500 underline dark:text-primary-400"
                >
                  Design
                </a>{' '}
                и{' '}
                <a
                  href="https://git.op-onai.kz"
                  className="text-primary-500 underline dark:text-primary-400"
                >
                  Git
                </a>
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
          <h1 className="text-center text-3xl font-bold capitalize text-gray-800 dark:text-white lg:text-4xl">
            Кому подойдёт платформа Op-Onai?
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-2 xl:gap-16">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                Тем, кто хочет попробовать себя в программировании
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Наша бесплатная платформа делает обучение доступным для всех. Учитесь в своем темпе
                и решайте задачи. Если вы застряли на одном моменте, не забрасывайте обучение.
                Всегда есть форум и сообщество в Discord, которые будут рады помочь вам в вопросе.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                Разработчикам, которые гуглят решения в YouTube
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Мы о вас тоже не забыли! Можете пользоваться нашими открытыми источниками чтобы
                вспомнить некоторые темы или изучить что-то новое ;)
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                Социально уязвимые группы
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Для школьников, студентов, и других, кто желают стать программистами но не имеют
                личных средств, мы предлагаем пройти курсы на нашей бесплатной платформе. Если вы
                покажете свой прогресс, пишите нам и мы индивидуально проконсультируем и поможем в
                развитии ваших навыков
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-500 dark:bg-primary-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                Тем, кто хотят начать или сменить карьеру в IT
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Наши решения по проектному обучению продемонстрируют рабочую среду в IT.
                Разрабатывайте код, завершайте тикеты в Agile, обсуждайте прогресс с менеджерами,
                ломайте тесты, чините коммиты и сидите за экраном разбирая git merge - ощутите на
                себе каково это быть программистом и стремительно набирайте опыт
              </p>
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
                <div className="md:h-40 lg:h-48">
                  <h1 className="text-lg font-bold uppercase text-gray-800 dark:text-white">
                    Учите материалы в удобное время
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Изучаете теорию и практикуетесь на задачах, в нашей платформе{' '}
                    <a
                      href="https://edu.op-onai.kz"
                      className="text-primary-500 underline dark:text-primary-400"
                    >
                      edu.op-onai.kz
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className="mt-2 w-full object-cover"
                  src="/static/images/edu-op-onai.png"
                  alt="NIKE AIR"
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white pt-3 shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <div className="mb-3 flex h-8 w-8 flex-wrap items-center justify-center rounded-full bg-primary-200 text-center font-bold text-primary-700 dark:bg-primary-500 dark:text-gray-100">
                  <span className=" text-xl">2</span>
                </div>
                <div className="md:h-40 lg:h-48">
                  <h1 className="text-lg font-bold uppercase text-gray-800 dark:text-white">
                    Находите друзей
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Заходите в
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
                      Форум
                    </a>
                    , находите новых друзей, спрашивайте вопросы и решайте задачи вместе
                  </p>
                </div>
              </div>

              <div>
                <Image
                  className="mt-2 w-full object-cover"
                  src="/static/images/forum-op-onai.png"
                  alt="NIKE AIR"
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white pt-3 shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <div className="mb-3 flex h-8 w-8 flex-wrap items-center justify-center rounded-full bg-primary-200 text-center font-bold text-primary-700 dark:bg-primary-500 dark:text-gray-100">
                  <span className=" text-xl">3</span>
                </div>
                <div className="md:h-40 lg:h-48">
                  <h1 className="text-lg font-bold uppercase text-gray-800 dark:text-white">
                    Решайте задачи
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Собирайтесь в команды, соревнуйтесь в скоростных решениях задач и набирайте опыт
                    (В разработке)
                  </p>
                </div>
              </div>

              <div>
                <Image
                  className="mt-2 w-full object-cover"
                  src="/static/images/design-op-onai.png"
                  alt="NIKE AIR"
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white pt-3 shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <div className="mb-3 flex h-8 w-8 flex-wrap items-center justify-center rounded-full bg-primary-200 text-center font-bold text-primary-700 dark:bg-primary-500 dark:text-gray-100">
                  <span className=" text-xl">4</span>
                </div>
                <div className="md:h-40 lg:h-48">
                  <h1 className="text-lg font-bold uppercase text-gray-800 dark:text-white">
                    Разрабатывайте Проекты
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Создавайте проекты в платформе op-onai, и пользуйтесь полученными знаниями на
                    практике, в среде схожей с рабочей средой в IT
                  </p>
                </div>
              </div>

              <div>
                <Image
                  className="mt-2 w-full object-cover"
                  src="/static/images/agile-op-onai.png"
                  alt="NIKE AIR"
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div>
          <h2
            id="pricing"
            className="my-10 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-4xl"
          >
            Начните кодить <span className="underline decoration-primary-500">сегодня</span>.
          </h2>
        </div>
        <div className=" mx-auto mb-20 flex flex-wrap">
          <div className="w-full p-4 md:w-1/2 lg:w-1/2 ">
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
          <div className="w-full p-4 md:w-1/2 lg:w-1/2 ">
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
