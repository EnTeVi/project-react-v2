import './App.css';
import {useEffect, useState} from "react";
import {commentsService} from "./services";
import {Comments, CommentsForm} from "./components";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentsService.getAll().then(({data}) => setComments([...data]));
  }, []);

  return (
    <div className="App">
      <CommentsForm setComments={setComments}/>
      <Comments comments={comments}/>
    </div>
  );
}

export default App;
