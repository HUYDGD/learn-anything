const response = await fetch(process.env.GRAFBASE_URL as string, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.GRAFBASE_API_KEY as string,
  },
  body: JSON.stringify({
    query: /* GraphQL */ `
      query GetAllPosts($first: Int!) {
        postCollection(first: $first) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `,
    variables: { first: 100 },
  }),
})

const data = await response.json()
