import CategoryBox from "components/CategoryBox";
import WebImage from "components/WebImage";
import Link from "next/link";
import React from "react";

type Props = {
  blog: Blog;
};

const LatestBlog = ({ blog }: Props) => {
  return (
    <div>
      <h2 className="text-lg font-semibold py-4">Latest Blog</h2>

      {/* Blog */}
      <Link href={`/blog/${blog.slug}`}>
        <div className="space-y-2">
          {/* image */}
          <WebImage
            src={blog.thumbnail.url}
            width={1920}
            height={1080}
            alt={"image"}
          />

          {/* heading */}
          <h1 className="text-xl font-bold">{blog.title}</h1>

          {/* description */}
          <h2 className="font-semibold">{blog.description}</h2>

          {/* categories */}
          <div className="flex space-x-2">
            {blog.categories.map((category, index) => (
              <CategoryBox category={category} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LatestBlog;
