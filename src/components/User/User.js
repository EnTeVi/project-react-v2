import './User.css';

const User = ({user, liftUser, superLift}) => {
    let {id, name, email, phone, website} = user;



    return (
        <div className='box-us'>
            <div>
                <details className='details'>
                    <summary><h3>Details</h3><p>Id: {id}</p><p>Name: {name}</p></summary>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                </details>

                {/*{  superLift ()  }*/}
            </div>

            {/*<button onClick={() => {*/}
            {/*    liftUser(*/}
            {/*        <div>*/}
            {/*            <p>Email: {email}</p>*/}
            {/*            <p>Phone: {phone}</p>*/}
            {/*            <p>Website: {website}</p>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*}}>Details*/}
            {/*</button>*/}
        </div>
    );
};

export {User};