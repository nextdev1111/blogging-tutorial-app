import graphqlFetcher from "./ApolloClient";
import * as queries from './queries'

export class Services{
    constructor(){}

    async queryBlogs(): Promise<Blog[]>{
        const data = await graphqlFetcher(queries.BlogsQuery)

        const blogs: Blog[] = data.blogs;

        return blogs
    }

    async queryBlog(slug: string): Promise<Blog>{
        const data = await graphqlFetcher(queries.BlogQuery, {
            blogSlug: slug
        })

        const blog: Blog = data.blog;

        return blog
    }

}

// instance of [Services]
const services = new Services()

export default services;