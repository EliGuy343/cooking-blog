import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
            createdAt
            slug
            name
            excerpt
            featuredImage {
                url
            }
            category {
                name
                slug
            }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.postsConnection.edges;
  };

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String) {
            post(where: {slug: $slug}) {
                author {
                    bio
                    name
                    id
                    photo {
                        id
                        url
                    }
                }
                createdAt
                slug
                name
                excerpt
                featuredImage {
                    url
                }
                category {
                    name
                    slug
                }
                content {
                    raw
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    return result;
}

export const getRecentPosts = async () => {
    const query =  gql`
        query GetPostDetails() {
            posts(
                orderBy: createdAt_ASC
                last: 3
            ) {
                name
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.posts;
}

export const getsimilarPosts = async () => {
    const query = gql`
        query GetPostDetails($slug: String, $category: [String]) {
            posts(
                where:{slug_not:$slug, AND:{category:{slug_in: $category}}}
                last: 3
            ) {
                name
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query, {categories, slug });
    return result.posts;
}

export const getCategories = async () => {
    const query = gql`
        query getCategories{
            categories {
                name
                slug
            }

        }
    `
    const result = await request(graphqlAPI, query);
    return result.categories;
}

export const submitComment = async (obj) => {
    debugger;
    const result = await fetch('/api/comments', {
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({...obj}),
    });
    return result;
}