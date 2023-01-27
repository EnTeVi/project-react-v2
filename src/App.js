import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {
  AboutPage,
  AlbumsPage,
  CommentsPage,
  HomePage,
  NotFoundPage,
  PostDetailsPage,
  TodosPage
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>

          <Route index element={<HomePage/>}/>
          <Route path={'albums'} element={<AlbumsPage/>}/>

          <Route path={'comments'} element={<CommentsPage/>}>
            <Route path={':postId'} element={<PostDetailsPage/>}/>
          </Route>

          <Route path={'todos'} element={<TodosPage/>}/>
          <Route path={'about'} element={<AboutPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
