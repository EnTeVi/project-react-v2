import {Users} from "../../components";
import {Outlet} from "react-router-dom";
import {UserForm} from "../../components/UserForm/UserForm";

const UsersPage = () => {
    return (
        <div>
            <UserForm/>
            <Outlet/>
            <Users/>
        </div>
    );
};

export {UsersPage};