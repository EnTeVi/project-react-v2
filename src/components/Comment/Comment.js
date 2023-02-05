import {Component} from "react";

class Comment extends Component {

    render() {
        const {id, name, email} = this.props.comment;

        return (
            <div>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        );
    }
}

export {Comment};