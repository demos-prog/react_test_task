import { useParams } from "react-router-dom";
import { useGetCommentsByIdQuery } from "../../api/comments";
import css from "./PostInfo.module.css";

const PostInfo: React.FC = () => {
  const { id } = useParams();
  const {
    data: comments,
    isLoading,
    error,
  } = useGetCommentsByIdQuery(id ?? "");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading comments</div>;
  if (!comments) return <div>No comments found</div>;

  return (
    <div>
      <div>Product info: {id}</div>
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
