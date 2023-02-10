import {Outlet} from "react-router";

import {Header,SiteBar} from "../../components";

const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <SiteBar/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};