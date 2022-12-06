import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import services from "@/services/index";
import Container from "../layouts/Container";
import LatestBlog from "components/blogs/LatestBlog";
import Blogs from "components/blogs/Blogs";
import Link from "next/link";

/*

List
5. Sharer
3. Deployment
4. On Demand Revalidation

 */

type Props = {
  blogs: Blog[];
};

const Home = ({ blogs }: Props) => {
  console.log(blogs);

  return (
    <Container meta={{ title: "Next Dev" }}>
      <div>
        {/* latest blog */}
        <LatestBlog blog={blogs[0]} />

        <hr className="w-full border-1 border-zinc-200 dark:border-zinc-800 mb-8 my-5" />

        {/* blogs */}
        <Blogs blogs={blogs.slice(1, 3)} />
      </div>

      {/* show more */}
      <div className="my-4">
        <Link
          href="/blogs"
          className=" bg-zinc-200 dark:bg-zinc-800 px-3 py-2 rounded-md cursor-pointer"
        >
          Show More
        </Link>
      </div>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = await services.queryBlogs();

  return {
    props: {
      blogs,
    },
  };
};
