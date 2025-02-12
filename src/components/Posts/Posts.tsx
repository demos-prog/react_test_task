import { useState } from "react";
import { useGetAllPostsQuery } from "../../api/posts";
import PostComponent from "../Post/Post";

const Posts: React.FC = () => {
  const [page, setPage] = useState(1);
  const POSTS_PER_PAGE = 10;
  const { data: posts, isLoading, error } = useGetAllPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!posts) return <div>No posts</div>;

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePrev = () => {
    setPage((p) => Math.max(1, p - 1));
  };

  const handleNext = () => {
    setPage((p) => Math.min(totalPages, p + 1));
  };

  return (
    <>
      <div>
        {currentPosts.map((post) => (
          <PostComponent key={post.id} {...post} />
        ))}
      </div>
      <div>
        Page: {page} of {totalPages}
      </div>
      <div>
        <button onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        <button onClick={handleNext} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Posts;
