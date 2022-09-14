export const myArticlesQuery = `
  query GetMyArticles($page: Int!, $username: String!) {
    user(username: $username) {
      publication {
        posts(page: $page) {
          cuid
          slug
          title
          dateAdded
          brief
        }
      }
    }
  }
`;
