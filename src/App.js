import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {LinkRoutes} from "./routes/link.routes";
import {MainLayout} from './layouts';
import {
    AboutPage,
    AlbumsPage,
    CommentsPage,
    HomePage, NotFoundPage,
    PostOfCommentsPage,
    TodosPage, UserDetailsPage,
    UsersPage
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={LinkRoutes.index} element={<MainLayout/>}>
          <Route index element={<Navigate to={LinkRoutes.home}/>}/>
          <Route path={LinkRoutes.home} element={<HomePage/>}/>
          <Route path={LinkRoutes.albums} element={<AlbumsPage/>}/>
          <Route path={LinkRoutes.users} element={<UsersPage/>}>
              <Route path={LinkRoutes.userId} element={<UserDetailsPage/>}/>
          </Route>
          <Route path={LinkRoutes.comments} element={<CommentsPage/>}>
              <Route path={LinkRoutes.post} element={<PostOfCommentsPage/>}/>
          </Route>
          <Route path={LinkRoutes.todos} element={<TodosPage/>}/>
          <Route path={LinkRoutes.about} element={<AboutPage/>}/>
          <Route path={LinkRoutes.notFound} element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
