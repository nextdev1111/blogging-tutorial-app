import WebImage from "components/WebImage";
import Container from "layouts/Container";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import services from "services";
import parse, { Element } from "html-react-parser";
import moment from "moment";
import readingTime from "reading-time";
import CategoryBox from "components/CategoryBox";
import Sharer from "components/Sharer";

type Props = {
  blog: Blog;
};

function Blog({ blog }: Props) {
  const timeToRead = readingTime(blog.content.html);

  return (
    <Container
      meta={{
        title: blog.title,
        date: blog.publishedAt,
        description: blog.description,
        image: blog.thumbnail.url,
      }}
    >
      <div className="space-y-4">
        {/* heading */}
        <h1 className="text-4xl font-bold">{blog.title}</h1>

        {/* sharer */}
        <Sharer blog={blog} />

        {/* image */}
        <div>
          <WebImage
            alt={blog.title}
            src={blog.thumbnail.url}
            height={1080}
            width={1920}
          />
        </div>

        {/* description */}
        <p>{blog.description}</p>

        {/* content */}
        <div className="min-w-full prose prose-zinc dark:prose-invert p-0 prose-h1:my-4 prose-h2:my-2 hover:prose-a:text-sky-500 transition-all duration-150 ">
          {parse(blog.content.html, {
            replace: (domNode) => {
              if (domNode instanceof Element && domNode.name === "img") {
                return (
                  <WebImage
                    alt={blog.title}
                    src={domNode.attribs.src}
                    height={
                      domNode.attribs.height
                        ? parseInt(domNode.attribs.height)
                        : 1080
                    }
                    width={
                      domNode.attribs.width
                        ? parseInt(domNode.attribs.width)
                        : 1920
                    }
                  />
                );
              }
            },
          })}
        </div>

        {/* date */}
        <div className="space-y-2">
          <h1 className="text-lg font-bold"># Details</h1>
          <p>
            Published on <span>{moment(blog.publishedAt).format("LL")}</span> •{" "}
            {timeToRead.text}
          </p>
        </div>

        {/* categories */}
        <div className="flex space-x-2">
          {blog.categories.map((category, index) => (
            <CategoryBox category={category} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Blog;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const blogs = await services.queryBlogs();

  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug;

  if (typeof slug !== "string") {
    return { notFound: true };
  }

  const blog = await services.queryBlog(slug);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: {
      blog,
    },
  };
};
