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
            className="rounded bg-black px-4 py-1 text-sm font-bold text-gray-100 ring-offset-indigo-700 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-white dark:text-gray-900 sm:px-8 sm:py-4 lg:text-xl"
          >
            Начать
          </a>
        </div>
      </div>
      <div className="aspect-w-16 aspect-h-9 my-10 my-20 grid place-items-center">
        <iframe
          src="https://www.youtube.com/embed/UBOj6rqRUME"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="my-20">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Курсы: Op-Onai camp
        </h2>
        <div className="my-10 grid place-items-center">
          <img alt="" className="px-10 pt-5" src="/static/images/edu-op-onai.png" />
        </div>
        <p className="pb-5 text-xl leading-7 text-gray-500 dark:text-gray-300">
          100% Беслатные курсы с возможностью получения сертификатов. Смотри, изучай, проходи тесты
          и создавай проекты.
        </p>
      </div>
      <div className="my-20">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Сообщество: Discord, Форум
        </h2>
        <div className="my-10 grid place-items-center">
          <img alt="" className="px-10 pt-5" src="/static/images/forum-op-onai.png" />
        </div>
        <p className="pb-5 text-xl leading-7 text-gray-500 dark:text-gray-300">
          Задавай вопросы, помогай другим. Находи единомышленников и начинайте проекты вместе.
        </p>
      </div>
      <div className="my-20">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Коллаборации: Agile + Design
        </h2>
        <div className="my-10 grid place-items-center">
          <img alt="" className="px-10 pt-5" src="/static/images/agile-op-onai.png" />
          <img alt="" className="px-10 pt-5" src="/static/images/design-op-onai.png" />
        </div>
        <p className="pb-5 text-xl leading-7 text-gray-500 dark:text-gray-300">
          Запускай проекты в профессинальной платформе. Создавай цели, составляйте планы и стройте
          приложения будущего.
        </p>
      </div>
      <div className="my-20">
        <h2 className="my-10 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Чего ты ждешь? Начни <span className="underline decoration-primary-500">сейчас.</span>
        </h2>
        <p className="my-10 pb-5 text-xl leading-7 text-gray-500 dark:text-gray-300">
          Начать можешь с бесплатных курсов. Заходи в edu.op-onai.kz и открой для себя мир IT.
        </p>
        <a
          href="https://edu.op-onai.kz"
          className="my-10 rounded bg-black px-4 py-5 text-sm font-bold text-gray-100 ring-offset-indigo-700 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-white dark:text-gray-900 sm:px-8 sm:py-4 lg:text-xl"
        >
          Начать
        </a>
      </div>
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
