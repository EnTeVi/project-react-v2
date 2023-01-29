import {Outlet, useNavigate} from "react-router-dom";

import {Header} from "../../components";

const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header navigate={navigate}/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};