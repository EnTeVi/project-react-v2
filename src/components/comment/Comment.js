import css from './Comment.module.css';

const Comment = ({comment}) => {
    const {name, email, body} = comment;

    return (
        <div className={css.boxComment}>
            <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Body: {body}</p>
            </div>
        </div>
    );
};

export {Comment};