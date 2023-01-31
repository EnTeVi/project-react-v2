import {useContext} from "react";
import {MyContext} from "../../index";

const AboutPage = () => {
    const context = useContext(MyContext);

 return (
  <div>
    {/*<p>Name: {context.name}</p>*/}
    {/*<p>Age: {context.age}</p>*/}
      {JSON.stringify(context)}
  </div>
 );
};

export {AboutPage};