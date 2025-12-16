// Matches the structure of https://jsonplaceholder.typicode.com/posts
//https://apidog.com/blog/rest-api-test-tools/
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}