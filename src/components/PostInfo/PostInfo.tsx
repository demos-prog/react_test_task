import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/posts";
import { useGetCommentsByIdQuery } from "../../api/comments";
import css from "./PostInfo.module.css";

const PostInfo: React.FC = () => {
  const { id } = useParams();
  const {
    data: post,
    isLoading: isLoadingPost,
    error: postError,
  } = useGetPostByIdQuery(id ?? "");
  
  const {
    data: comments,
    isLoading: isLoadingComments,
    error: commentsError,
  } = useGetCommentsByIdQuery(id ?? "");

  if (isLoadingPost || isLoadingComments) return <div>Loading...</div>;
  if (postError || commentsError) return <div>Error loading data</div>;
  if (!post || !comments) return <div>No data found</div>;

  return (
    <div>
      <div className={css.postInfo}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div>
        <h3>Comments:</h3>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <p>By: {comment.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostInfo;
