import css from './Todo.module.css';

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;

    const bigword = (arg) => {
        return arg[0].toUpperCase() + arg.slice(1) + '.';
    }

    return (
        <div className='container'>
            <div className={css.todoParams}>
                <p className='boxLeft'>UserId: </p>
                <p className='boxRight'>{userId}</p>
            </div>
            <div className={css.todoParams}>
                <p className='boxLeft'>Id: </p>
                <p className='boxRight'>{id}</p>
            </div>
            <div className={css.todoParams}>
                <p className='boxLeft'>Title: </p>
                <p className='boxRight'>{bigword(title)}</p>
            </div>
            <div className={css.todoParams}>
                <p className='boxLeft'>Completed: </p>
                <p className='boxRight'>{completed.toString()}</p>
            </div>
        </div>
    );
};

export {Todo};