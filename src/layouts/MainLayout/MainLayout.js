import {Outlet, useNavigate} from "react-router-dom";

import {Header, SiteBar} from "../../components";
import css from './MainLayout.module.css';

const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <Header navigate={navigate}/>
            </div>
            <div className={css.site}>
                <SiteBar/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};