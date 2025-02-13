import Post from "../../entities/Post";
import css from "./PostComponent.module.css";

const PostComponent: React.FC<Post> = ({ ...post }) => {
  return (
    <div className={css.postCard}>
      <div className={css.postImage}></div>
      <div className={css.postTitle}>{post.title}</div>
      <div className={css.postDescription}>{post.body}</div>
    </div>
  );
};

export default PostComponent;
