import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="flex flex-col items-center justify-start rounded-lg bg-gray-300 text-black lg:p-8 dark:bg-gray-900 dark:text-white">
        {/* Top Section */}
        <div className="mb-8">
          <div className="flex flex-col items-center justify-start">
            <h2 className="mb-2 text-center text-2xl font-semibold">
              Türkiyenin en kalabalık discord sunucusuna hoşgeldin.
            </h2>
          </div>
          <div className="mt-5 mb-5 flex items-center justify-center">
            <a
              href={'https://discord.gg/timarhane'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-1xl transform rounded-lg bg-blue-500 px-8 py-2 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
            >
              discord.gg/timarhane
            </a>
          </div>

          <p className="text-black-100 text-center text-lg dark:text-gray-300">
            Yorgun olduğunu biliyorum. Sosyal medyada, ailenin ve çevrenin içinde hep aynı tür
            insanları görmekten, düşünmeden yaşamayı tercih edenlerle bir arada bulunmaktan bıktın.
            Aptallığın seni ne kadar sinirlendirdiğini de biliyorum. Yorumlara göz gezdirmen hep
            aynı sebepten: Sana benzeyen birini bulmak istiyorsun. Kendi düşüncelerinin
            kaybolmadığını gösterecek bir kulak arıyorsun. Tartışmak, konuşmak, anlaşılmak
            istiyorsun. Fakat aptallık o kadar yaygın ki, sen ve ben onların arasında gizleniyorduk;
            çünkü bu, denizde spesifik bir taşı aramaya benziyordu.
            <br />
            <br />
            Zorbalıktan bıktın, insanların güç gösterilerinden usandın. Sırf fikrini çürütmek için
            tartışanlar yüzünden tartışmayı bıraktın. Herkes gibi borsayla, parayla, karşı cinsle
            kafayı bozmadığın için sana küçümseyici gözlerle bakıyorlar. Geniş düşünen, zeki biri
            olduğun için utanmanı istiyorlar. Herkes gibi kurgu videolara gülmen, sağ-sol diye ikiye
            ayrılmış ideolojilerden birini seçmen, gösterilen yolda ilerlemen, ölümlere üzülmen,
            doğru-yanlış kavramlarını evrensel kabul etmen, bir şeylere inanman bekleniyor senden.
            <br />
            <br />
            Ama sen aptal değilsin. Denedin biliyorum; sırf mutlu olabilmek için bir aptal gibi
            yaşamayı denedin, bir süre işe yarar gibi de oldu ama hep aynı varoluşsal sancılarla
            karşılaştın, ruhsuz ve mutsuz hissettin. Artık bu sona erdi.Tımarhane , senin, benim,
            bizim gibiler tarafından ve bizim gibiler için açıldı. Herhangi bir konuda ne kadar uç
            fikirlerin olursa olsun, burada seni dinlemek istiyoruz; farklı görüşlere, farklı
            yorumlara açığız. Sen, sen anlıyorsun ne dediğimi ve bunun bir devrim olduğunun
            farkındasın.
            <br />
            <br />
            Burada istediğin herşeyi bolca bulacaksın. Ama seçimlerinde dikkat et.
          </p>
          {/* Discord Link Join Badge */}
          <div className="mt-5 flex items-center justify-center">
            <a
              href={'https://discord.gg/timarhane'}
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-lg bg-blue-600 px-8 py-4 text-center text-3xl font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
            >
              Tıkla
              <br />
              Aramıza Katıl
            </a>
          </div>
        </div>
      </div>

      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
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
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
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
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
