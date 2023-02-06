import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {AboutPage, HomePages, NotFoundPages, UsersPage} from "./pages";
import {MainLayout} from "./layouts";
import {LinkRoutes} from "./routes";

function App() {
  return (
    <Routes>
        <Route path={LinkRoutes.index} element={<MainLayout/>}>
            <Route index element={<Navigate to={'home'}/>}/>
            <Route path={LinkRoutes.home} element={<HomePages/>}/>
            <Route path={LinkRoutes.about} element={<AboutPage/>}/>
            <Route path={LinkRoutes.users} element={<UsersPage/>}/>
            <Route path={LinkRoutes.notFound} element={<NotFoundPages/>}/>
        </Route>
    </Routes>
  );
}

export default App;
