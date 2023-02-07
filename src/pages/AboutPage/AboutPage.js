import {useContext} from "react";
import {MyContext} from "../../index";
import css from './AboutPage.module.css';

const AboutPage = () => {
    const context = useContext(MyContext);





        // let inp = document.getElementById('inp');
    // console.log(inp);
        // let numb = inp.value
        // console.log(numb);
    //
    // let input = document.querySelector('input');
    // console.log(input.value);

    // const addPlus = (inp) => {
        // let x = '+';
    //     let d = inp.value + inp.value;
    //     console.log(d);
    // }

    // const val = (numb) => {
    //     let t = numb;
    //     console.log(t);
    //     return t;
    // }


    return (
        <div className={css.container}>
            {/*<p>Name: {context.name}</p>*/}
            {/*<p>Age: {context.age}</p>*/}
            {JSON.stringify(context)}
            {/*<div>*/}
            {/*    <input type="number" placeholder={'0'}/>*/}
            {/*    <button>push</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input type="button" placeholder={'+'} onClick={() => addPlus()}/>*/}
            {/*</div>*/}
            {/*{val(numb)}*/}


        </div>
    );
};

export {AboutPage};