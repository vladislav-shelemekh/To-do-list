import React from "react";
import "./post-add-form.css"

let i =7;

const PostAddForm = ({ createNotice,createTag }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        if (!e.target[0].value.length) return
        

 //qwg#1111
        if (e.target[0].value.indexOf('#')>=0){

            console.log(e.target[0].value.indexOf('#'))
            let startSearch =e.target[0].value.indexOf('#');

            let endOftag = e.target[0].value.indexOf(" ",startSearch);
            endOftag = endOftag >= 0 ? endOftag : e.target[0].value.length;

            console.log(e.target[0].value.slice(e.target[0].value.indexOf('#'),endOftag),"@!",endOftag)
            let tag  =e.target[0].value.slice(e.target[0].value.indexOf('#'),endOftag)
            createTag(tag,i)
        }

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