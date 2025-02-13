import Post from "../../entities/Post";
import css from "./PostComponent.module.css";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};

const PostComponent: React.FC<Post> = ({ ...post }) => {
  return (
    <div className={css.postCard}>
      <div className={css.postImage}></div>
      <div className={css.postTitle}>{post.title}</div>
      <div className={css.postDescription}>
        {truncateText(post.body, 100)}
      </div>
    </div>
  );
};

export default PostComponent;
