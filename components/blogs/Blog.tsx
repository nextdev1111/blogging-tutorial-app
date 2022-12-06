import CategoryBox from "components/CategoryBox";
import WebImage from "components/WebImage";
import Link from "next/link";
import React from "react";

type Props = {
  blog: Blog;
};

const Blog = ({ blog }: Props) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="grid grid-cols-3 gap-4">
        {/* left  */}
        <div className="cols-span-3 sm:cols-span-1">
          <WebImage
            src={blog.thumbnail.url}
            height={1080}
            width={1920}
            alt={blog.title}
          />
        </div>

        {/* right */}
        <div className="col-span-3 sm:col-span-2 flex flex-col justify-between pb-3">
          <h1 className="text-lg font-semibold">{blog.title}</h1>
          {/* categories */}
          <div className="flex space-x-2">
            {blog.categories.map((category, index) => (
              <CategoryBox category={category} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
