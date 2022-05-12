import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from 'reactstrap';
import "./post-list.css"

class PostList extends React.Component {
    render() {
        const {posts, onLike, onImportant, onDelete } = this.props

        return (
            <ListGroup className="app-list">
                {posts.map(item => {
                    return (
                        <li key={item.id} className="list-group-item">
                            <PostListItem
                                {...item} 
                                onLike={onLike} 
                                onImportant={onImportant} 
                                onDelete={onDelete}
                            />
                        </li>
                    )
                })}
            </ListGroup>
        )
    }
}


export default PostList;