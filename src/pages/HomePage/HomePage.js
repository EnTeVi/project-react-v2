import {useContext} from "react";
import {MyContext} from "../../index";
import {Button} from "../../components/Button/Button";

const HomePage = () => {
    const context = useContext(MyContext);
    context.gender = 'male'
    Object.assign(context, {status: true})
    delete context.name
 return (
  <div>
      <Button click={() =>
          console.log('Click nigger')
      }
          style={{backgroundColor: 'green'}
      }>
          click
      </Button>
    Home
  </div>
 );
};

export {HomePage};