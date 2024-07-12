import { PostDataType } from '@/types';
import Link from 'next/link';
import Tag from './Tag';

export default function PostCard({ data }: { data: PostDataType }) {
  const { title, date, readingTime, summary, url, tag } = data;
  const dateString = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div
      className={
        'border-2 px-3 py-5 border-slate-700 mt-3 shadow-lg shadow-slate-600 rounded-lg hover:shadow-emerald-300 hover:shadow-lg'
      }
    >
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-lg md:text-xl xl:text-2xl">{title}</h3>
        <div className="flex gap-1">
          <p className="text-sm md:text-base xl:text-lg text-emerald-300">
            Published on {dateString}
          </p>
          <p>
            <span>|</span>
          </p>
          <p className="text-sm md:text-base xl:text-lg text-emerald-300">
            {readingTime} min read.
          </p>
        </div>

        <p className="text-sm md:text-base xl:text-lg">
          {summary.slice(0, 130)}
          {'... '}
          <span className="text-sky-500 cursor-pointer underline">
            Read more
          </span>
        </p>

        <p className="text-sm md:text-base xl:text-lg flex gap-2 mt-3">
          {tag.slice(0, 4).map((tagName: string) => (
            <Tag key={tagName} tag={tagName} />
          ))}
        </p>
      </Link>
    </div>
  );
}
