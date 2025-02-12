import { useGetAllPostsQuery } from "../../api/posts";

const Posts: React.FC = () => {
  const { data: posts, isLoading, error } = useGetAllPostsQuery();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!posts) return <div>No posts</div>;

  console.log(posts);
  return <div>All posts</div>;
};

export default Posts;
