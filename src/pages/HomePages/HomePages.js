import {useReducer, useRef} from "react";

import {Cats, Dogs} from "../../components";

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_CAT':
            const [last] = state.cats.slice(-1);
            const id = last?last.id+(last.id):2;
            return {...state, cats:[...state.cats, {id, name:action.payload}]}

        case 'DELETE_CAT':
            const index = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(index, 1);
            return {...state}

        case 'ADD_DOG':
            const [lastdog] = state.dogs.slice(-1);
            const idDog = lastdog ? lastdog.id + 1 : 1;
            return {...state, dogs:[...state.dogs, {id:idDog, name:action.payload}]}

        case 'DELETE_DOG':
            const indexDog = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(indexDog, 1);
            return {...state}

        default:
            return {...state}
    }
}

const HomePages = () => {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    const catInp = useRef();
    const dogInp = useRef();

    function createCat() {
        dispatch({type: 'ADD_CAT', payload:catInp.current.value})
        catInp.current.value = ''
    }

    function createDog() {
        dispatch({type: 'ADD_DOG', payload:dogInp.current.value})
        dogInp.current.value = ''
    }

    return (
        <div className='container'>
            <div>
                <input type={'text'} ref={catInp}/>
                <button onClick={createCat}>create cat</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>

            <div>
                <input type={'text'} ref={dogInp}/>
                <button onClick={createDog}>create dog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export {HomePages};