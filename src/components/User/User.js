import './User.css';
import {useEffect, useState} from "react";

const User = ({user}) => {
    let {id, name, email, phone, website} = user;

    // const [noneInfo, setNoneInfo] = useState([]);

    // useEffect(() => {
    //     setNoneInfo(liftUs);
    // }, [])

    // const but = () => {
    //     return (
    //         liftUser(
    //             <div>
    //                 <div className='infoNone' id='infoNone'>
    //                     <p>Phone: {phone}</p>
    //                     <p>Website: {website}</p>
    //                 </div>
    //
    //
    //             </div>
    //         )
    //     )
    //
    // }


// else {
//         added_item_button.innerHTML = action;
//     }

    function action() {
        let added_item_button = document.getElementById('infoNone');
        let actualDisplay = getComputedStyle(added_item_button).display;
        if (actualDisplay === 'none') {
            added_item_button.style.display = 'block';
        } else {
            added_item_button.style.display = 'none';
        }
    }


    return (
        <div className='box-us'>
            <div>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
            </div>

            <div className='infoNone' id='infoNone'>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
            </div>




            <button onClick={() =>
                action()



            }>Details
            </button>




        </div>
    );
};

export {User};


//
// <button onClick={() => {
//     liftUser(
//         <div>
//             <div className='infoNone' id='infoNone'>
//                 <p>Phone: {phone}</p>
//                 <p>Website: {website}</p>
//             </div>
//
//
//         </div>
//     )
// }}>Details
// </button>