import {PostsofComments} from "../../components/PostsofComments/PostsofComments";
import {useParams} from "react-router-dom";

const PostOfCommentsPage = () => {
    const {postId} = useParams();

 return (
  <div>
      <PostsofComments postId={postId}/>
  </div>
 );
};

export {PostOfCommentsPage};