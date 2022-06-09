import React, {Component} from "react";
import "./post-list-item.css"
// import "./post-list-item.scss"

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;

        let classNames = 'app-list-item d-flex justify-content-between'

        if (important) {
            classNames += ' important'
        }

        if (like) {
            classNames += ' like'
        }
    
        return (
            <div className={classNames}>
                <span
                    onClick={onToggleLiked} 
                    className="app-list-item-label"
                >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-item-center">
                    <button
                        onClick={onToggleImportant} 
                        type="button"
                        className="btn-star btn-sm"
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
                )
    
         }
}

// export default class PostListItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             important: false,
//             like: false
//         };
//         this.onImportant = this.onImportant.bind(this);
//         this.onLike = this.onLike.bind(this);
//     }

//     onLike() {

//     }

//     onImportant() {
//     }

//     render() {
//         const {id, label, important, like, onLike, onImportant, onDelete} = this.props;
//         let classNames = 'app-list-item d-flex justify-content-between'

//         if (important) {
//             classNames += ' important'
//         }

//         if (like) {
//             classNames += ' like'
//         }
    
//         return (
//             <div className={classNames}>
//                 <span
//                     onClick={() => onLike(id)} 
//                     className="app-list-item-label"
//                 >
//                     {label}
//                 </span>
//                 <div className="d-flex justify-content-center align-item-center">
//                     <button
//                         onClick={() => onImportant(id)}
//                         type="button"
//                         className="btn-star btn-sm"
//                     >
//                         <i className="fa fa-star"></i>
//                     </button>
//                     <button 
//                         type="button"
//                         className="btn-trash btn-sm"
//                         onClick={() => onDelete(id)}
//                     >
//                         <i className="fa fa-trash"></i>
//                     </button>
//                     <i className="fa fa-heart"></i>
//                 </div>
//             </div>
//                 )
    
//          }
// }


// const PostListItem = ({label, important = false}) => {

//     let classNames = 'app-list-item d-flex justify-content-between'
//     if (important) {
//         classNames += ' important'
//     }

//     return (
//         <div className={classNames}>
//             <span className="app-list-item-label">
//                 {label}
//             </span>
//             <div className="d-flex justify-content-center align-item-center">
//                 <button type="button" className="btn-star btn-sm">
//                     <i className="fa fa-star "></i>
//                 </button>
//                 <button type="button" className="btn-trash btn-sm">
//                     <i className="fa fa-trash-o "></i>
//                 </button>
//                 <i className="fa fa-heart"></i>
//             </div>
//         </div>


//     )
// };
