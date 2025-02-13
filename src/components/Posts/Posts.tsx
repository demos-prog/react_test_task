import { useState } from "react";
import { useGetAllPostsQuery } from "../../api/posts";
import PostComponent from "../PostComponent/PostComponent";
import css from "./Posts.module.css";
import PageButtons from "../PageButtons/PageButtons";

const Posts: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, error } = useGetAllPostsQuery();
  const POSTS_PER_PAGE = 10;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!posts) return <div>No posts</div>;

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <>
      <PageButtons totalPages={totalPages} page={page} setPage={setPage} />
      <div className={css.postsWrap}>
        {currentPosts.map((post) => (
          <PostComponent key={post.id} {...post} />
        ))}
      </div>
      <PageButtons totalPages={totalPages} page={page} setPage={setPage} />
    </>
  );
};

export default Posts;
