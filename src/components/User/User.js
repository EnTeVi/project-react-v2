import './User.css';

const User = ({user, liftUser, liftUs}) => {
    let {id, name, email, phone, website} = user;


    const but = () => {
        return (
            <button onClick={() => {
                liftUser(
                    <div>
                        <p>Id: {id}</p>
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                        <p>Website: {website}</p>
                    </div>
                )
            }}>Details
            </button>)
    }

    const ready = () => {

        if (user.id) {
            return liftUs;
        }
    }

    // створити новий стейт з юзефектом який слідкує за ід


    return (
        <div className='box-us'>
            <div>
                <p>Id: {id}</p>
                <p>Name: {name}</p>

                {
                    ready()
                }

            </div>

            {
                but()
            }

        </div>
    );
};

export {User};