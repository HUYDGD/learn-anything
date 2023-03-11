import { GraphQLClient, gql } from "graphql-request"
import { createServerAction$, redirect } from "solid-start/server"

export const grafbase = new GraphQLClient(import.meta.env.VITE_GRAFBASE_URL, {
  headers: { "x-api-key": import.meta.env.VITE_GRAFBASE_KEY },
})

const CreatePostMutation = gql`
  mutation CreatePost($title: String!, $slug: String!) {
    postCreate(input: { title: $title, slug: $slug }) {
      post {
        id
      }
    }
  }
`

const MakeATopic = gql`
  {
    postCollection(first: 100) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

export default function Home() {
  return <main class=""></main>
}
