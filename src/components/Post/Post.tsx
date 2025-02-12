import Post from "../../entities/Post";

const PostComponent: React.FC<Post> = ({ ...post }) => {
  return <div>{post.title}</div>;
};

export default PostComponent;
