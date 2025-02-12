import { useParams } from "react-router-dom";
import css from "./PostInfo.module.css";

type TypeName = {};

const PostInfo: React.FC<TypeName> = () => {
  const { id } = useParams();
  return <div>Product info: {id}</div>;
};

export default PostInfo;
