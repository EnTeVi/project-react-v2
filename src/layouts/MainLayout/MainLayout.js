import {Outlet} from "react-router-dom";

import {Header, SiteBar} from "../../components";
import css from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className={css.boxContent}>
                <SiteBar/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};