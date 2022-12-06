import {gql} from '@apollo/client'

// query for fetching multiple blogs
export const BlogsQuery = gql`
query Blogs {
    blogs {
      description
      id
      publishedAt
      slug
      title
      thumbnail{
        url(transformation:{
          image:{
            resize:{
              width: 1366
              height: 768
            }
          }
        })
      }
      content{
        html
      }
      categories(first: 2){
        name
      }
    }
  }
`

// query for fetching single and specific blog
export const BlogQuery = gql`
query Blog($blogSlug: String!) {
    blog(where: {slug: $blogSlug}) {
      description
      id
      publishedAt
      slug
      title
      thumbnail{
        url(transformation:{
          image:{
            resize:{
              width: 1366
              height: 768
            }
          }
        })
      }
      content{
        html
      }
      categories(first: 2){
        name
      }
    }
  }
`