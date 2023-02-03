import {Outlet, useNavigate} from "react-router-dom";
import {Header, SiteBar} from "../../components";
import css from './MainLayout.module.css';

const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <div className={css.mainContainer}>
            <Header navigate={navigate}/>
            <div className={css.mainBlock}>
                <SiteBar/>
                <div className={css.outlet}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export {MainLayout};