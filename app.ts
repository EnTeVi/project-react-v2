import {userService} from "./services";

userService.getAll().then(({data}) => {
    console.log(data[0].name);
})