const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;

    const bigword = (arg) => {
        return arg[0].toUpperCase() + arg.slice(1) + '.';
    }

 return (
  <div>
       <div>
           <p>UserId: </p>
           <p>{userId}</p>
       </div>
      <div>
          <p>Id: </p>
          <p>{id}</p>
      </div>
      <div>
          <p>Title: </p>
          <p>{bigword(title)}</p>
      </div>
      <div>
          <p>Completed: </p>
          <p>{completed.toString()}</p>
      </div>
  </div>
 );
};

export {Todo};