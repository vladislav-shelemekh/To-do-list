import React from "react";
import "./post-add-form.css"

const PostAddForm = ({ createNotice }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        if (!e.target[0].value.length) return
        createNotice(e.target[0].value)
        e.target[0].value = ''
    }

    return (
        <form onSubmit={onSubmit} className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="Add your notice"
                className="form-control new-post-label"
            />
            <button 
            type="submit"
            className="btn btn-outline-secondary">
                ADD
            </button>

        </form>

    )
};

export default PostAddForm;