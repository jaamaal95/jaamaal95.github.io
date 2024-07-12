import PostCard from '@/components/PostCard';
import Tag from '@/components/Tag';

import { ALL_POSTS, TAGS } from '@/data';

export default function Blog() {
  return (
    <div className="flex max-w-4xl flex-col mx-auto p-3 bg-slate-950 justify-center items-center">
      <div className="flex flex-col min-h-96 px-2 py-10">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold">
          All Posts
        </h2>

        <div className="flex flex-wrap gap-2 py-5">
          {TAGS.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {ALL_POSTS.map((post) => (
            <PostCard key={post.title} data={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
