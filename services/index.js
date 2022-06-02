import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
            edges {
                node {
                createdAt
                slug
                excerpt
                name
                featuredImage {
                    url
                }
                author {
                    bio
                    name
                    id
                    photo {
                        id
                        url
                    }
                }
                category {
                    name
                    slug
                }
                }
            }
            }
        }      
    `
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
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
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where:{slug_not:$slug, AND:{categories_some:{slug_in: $categories}}}
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