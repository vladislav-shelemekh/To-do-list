import React, {Component} from "react";
import "./post-add-form.css"

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({ // because no meaning in the state we dont use a func
            text: e.target.value
        })

    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)

        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}
            >
                <input 
                    type="text"
                    placeholder="О чем ты думаешь сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button 
                type="submit"
                className="btn btn-outline-secondary"
                
                >
                    Добавить
                </button>
    
            </form>
    
        )
    }
}
    


// const PostAddForm = ({ createNotice }) => {
//     const onSubmit = (e) => {
//         e.preventDefault()
//         if (!e.target[0].value.length) return
//         createNotice(e.target[0].value)
//         e.target[0].value = ''
//     }

//     return (
//         <form onSubmit={onSubmit} className="bottom-panel d-flex">
//             <input 
//                 type="text"
//                 placeholder="О чем ты думаешь сейчас?"
//                 className="form-control new-post-label"
//             />
//             <button 
//             type="submit"
//             className="btn btn-outline-secondary">
//                 Добавить
//             </button>

//         </form>

//     )
// };
