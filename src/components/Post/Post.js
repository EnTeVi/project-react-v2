import {Component} from "react";

class Post extends Component {

    render() {
        const {id, title, body} = this.props.post;

        return (
            <div>
                <p>Id: {id}</p>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
            </div>
        )
    }
}

export {Post};