import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {LinkRoutes} from "./routes";
import {MainLayout} from "./layouts";
import {AboutPage, CommentsPage, HomePage, NotFoundPage, PostsPage, LoginPage} from "./pages";
import {RequireAuth} from "./hoc";

function App() {
    return (
        <Routes>
            <Route path={LinkRoutes.index} element={<MainLayout/>}>
                <Route index element={<Navigate to={LinkRoutes.home}/>}/>
                <Route path={LinkRoutes.home} element={<HomePage/>}/>
                <Route path={LinkRoutes.comments} element={<CommentsPage/>}/>
                <Route path={LinkRoutes.posts} element={
                    <RequireAuth>
                        <PostsPage/>
                    </RequireAuth>
                }>
                </Route>
                <Route path={LinkRoutes.about} element={
                    <RequireAuth>
                        <AboutPage/>
                    </RequireAuth>
                }>
                </Route>
                <Route path={LinkRoutes.login} element={<LoginPage/>}/>
                <Route path={LinkRoutes.notFound} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
