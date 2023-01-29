import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.container}>
            <img src="https://alistersjp.files.wordpress.com/2011/06/404.png" alt="404"/>
        </div>
    );
};

export {NotFoundPage};