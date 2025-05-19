import { Post } from "@/lib/types/post";
import { getAllPosts } from "../lib/fetcher/posts";

export default async function Home() {
  const posts = await getAllPosts();

  // console.log(posts);

  return (
    <div>
      <h1>投稿内容です</h1>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
