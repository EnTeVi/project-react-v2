import './User.css';
import {useNavigate} from "react-router-dom";

const User = ({user, one}) => {
    let {id, name} = user;

    let navigate = useNavigate();

    // function action() {
    //     let added_item_button = document.getElementById('infoNone');
    //     let actualDisplay = getComputedStyle(added_item_button).display;
    //     if (actualDisplay === 'none') {
    //         added_item_button.style.display = 'block';
    //     } else {
    //         added_item_button.style.display = 'none';
    //     }
    // }

    const showHide = () => {
        let idPost = document.getElementById('infoNone');
        if (idPost.style.display === 'none'){
            idPost.style.display = 'block';
        } else {
            idPost.style.display = 'none';
        }
    }

    return (
        <div className='box-us'>
            <div>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
            </div>


            <div>{one}</div>



            <button onClick={() => {
                navigate(id.toString());
                showHide();
            }}>Details</button>




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