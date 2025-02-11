import Link from 'next/link'
import {letters} from '@/data/letters'
import {RightArrowIcon} from '@/components/Icons'

export function RelatedLetters() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-2xl font-medium text-foreground">You may also like</span>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          {letters.map((article, index) => (
            <Link
              key={index}
              href={article.url}
              className="flex py-6 gap-4 items-center no-underline hover:bg-accent transition-all duration-200 rounded-md hover:border-border hover:px-3 hover:-mx-3"
            >
              <div
                className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
                <span className="text-foreground">{article.title}</span>
                <span className="font-regular text-sm text-muted-foreground">
                  {article.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/letters"
          className="group flex items-center gap-1 text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground"
        >
          View all
          <span className="transition-transform group-hover:translate-x-1">
            <RightArrowIcon/>
          </span>
        </Link>
      </div>
    </div>
  )
}
