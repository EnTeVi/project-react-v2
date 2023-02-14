import {userService} from "./services/user.service";

userService.getAll().then(({data}) => {
    console.log(data[0].name);
})