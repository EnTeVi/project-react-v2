import {useLocation, useParams} from "react-router-dom";
import {UserDetails} from "../../components";

const UserDetailsPage = () => {
    const {userId} = useParams();

    const {state} = useLocation();

 return (
  <div>
        <UserDetails userId={userId} state={state}/>
  </div>
 );
};

export {UserDetailsPage};