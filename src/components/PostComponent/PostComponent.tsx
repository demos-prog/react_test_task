import { useNavigate } from "react-router-dom";
import Post from "../../entities/Post";
import css from "./PostComponent.module.css";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};

const PostComponent: React.FC<Post> = ({ ...post }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/post/${post.id}`)} className={css.postCard}>
      <div className={css.postImage}></div>
      <div className={css.postTitle}>{post.title}</div>
      <div className={css.postDescription}>{truncateText(post.body, 100)}</div>
    </div>
  );
};

export default PostComponent;
