import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-y-8 xl:space-x-0">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="text-sm leading-5 font-medium whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter
                                .replace('https://twitter.com/', '@')
                                .replace('https://x.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="xl:col-span-3 xl:row-span-2 xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
              <div className="pt-3 pb-5">
                <div className="flex w-full items-center justify-center">
                  <Link
                    href={'https://discord.gg/timarhane'}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 w-full"
                  >
                    <div className="flex w-full flex-col items-center justify-center">
                      <h3 className="bold text-center">
                        Türkiyenin En Popüler Kalabalık Tımarhane Sunucusuna Katıl
                      </h3>
                    </div>

                    <div className="mt-2 flex w-full flex-col items-center justify-center">
                      <div className="flex h-45 w-full flex-col bg-red-500 lg:w-96">
                        <div className="relative flex-4 bg-pink-50">
                          <Image
                            src="/static/images/timarhane_background.jpg"
                            alt="discord"
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>

                        <div className="flex w-full flex-6 flex-col bg-[#2B2D31]">
                          <div className="flex flex-2">
                            <div className="mt-2 ml-3 flex w-full flex-row">
                              <p className="bold text-[10px] text-gray-400">
                                SUNUCUYA KATILMASI İÇİN BİR DAVET GÖNDERDİN
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-7 flex-row items-center justify-center p-2 lg:p-0">
                            <div className="flex flex-8 items-start justify-center">
                              <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                                <Image
                                  src="/static/images/timarhane.jpg"
                                  alt="discord"
                                  fill
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>

                              <div className="ml-2 flex flex-col">
                                <p className="text-xs text-white">Tımarhane</p>
                                <p className="text-xs text-gray-400">
                                  Türkiyenin En Popüler Sunucusu
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-3">
                              <div className="ml-2 flex h-10 w-12 items-center justify-center rounded-md bg-green-700 lg:w-18">
                                <p className="mb-1 text-center text-xs text-white">Katıl</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex flex-col">
                  <div>
                    <h3 className="bold text-lg text-gray-900 dark:text-gray-100">
                      Diğer Bloglarımıza şu adreslerden ulaşabilirsiniz:
                    </h3>
                  </div>

                  <div className="mt-3">
                    <ul>
                      <li>
                        <Link href="https://enkalabalikdiscord.com/blog">
                          <p className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                            En Kalabalık Discord Blog
                          </p>
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="https://enkalabalikdiscord.com.tr/blog">
                          <p className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                            En Kalabalık Discord Blog 2
                          </p>
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="https://kalabalikdiscord.com.tr/blog">
                          <p className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                            Kalabalık Discord Blog
                          </p>
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="https://kalabalikdiscord.com/blog">
                          <p className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                            Kalabalık Discord Blog 2
                          </p>
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="https://turkiyediscord.xyz/blog">
                          <p className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                            Türkiye Discord Blog
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <Link href={discussUrl(path)} rel="nofollow">
                  Discuss on Twitter
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}>View on GitHub</Link> */}
              </div>
              {siteMetadata.comments && (
                <div
                  className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
            <footer>
              <div className="divide-gray-200 text-sm leading-5 font-medium xl:col-start-1 xl:row-start-2 xl:divide-y dark:divide-gray-700">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && prev.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to the blog"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
