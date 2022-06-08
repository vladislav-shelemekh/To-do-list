import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from 'reactstrap';
import "./post-list.css"

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => { //

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
            <PostListItem 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleLiked={() => onToggleLiked(id)}
            />
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>


    )
};


// class PostList extends React.Component {
//     render() {
//         const {posts, onLike, onImportant, onDelete } = this.props

//         return (
//             <ListGroup className="app-list">
//                 {posts.map(item => {
//                     return (
//                         <li key={item.id} className="list-group-item">
//                             <PostListItem
//                                 {...item} 
//                                 onLike={onLike} 
//                                 onImportant={onImportant} 
//                                 onDelete={onDelete}
//                             />
//                         </li>
//                     )
//                 })}
//             </ListGroup>
//         )
//     }
// }

export default PostList;