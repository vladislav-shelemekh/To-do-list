import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import  "./app.css";
import styled from 'styled-components';
import Tags from '../tags-list/tags'
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

class App extends React.Component {
    state = {
        posts: [
            {label: 'Notice  #tag1', important: false, like: false, id: '0',visible: true},
            {label: 'Notice  #tag2', important: false, like: false, id: '1' ,visible: true },
            {label: 'Notice  #tag2', important: false, like: false, id: '2' ,visible: true },
        ],
        tags:[
            {label: '#tag1', important: false,  id: '0' },
            {label: '#tag2', important: false,  id: '1' },
            {label: '#tag3', important: false,  id: '3' }
        ],
        likes: []
    }

    constructor(props) {
        super(props);
        this.onLike = this.onLike.bind(this)
        this.onImportant = this.onImportant.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.createNotice = this.createNotice.bind(this);
        this.updateState =this.updateState.bind(this)
        this.createTag =this.createTag.bind(this)
    }

    onLike(id) {
        const posts = this.state.posts.map(item => {
            if (item.id === id) {
                item.like = !item.like
            }
            return item
        })

        this.setState({ posts })
    }

    onImportant(id) {
        const posts = this.state.posts.map(item => {
            if (item.id === id) {
                item.important = !item.important
            }
            return item
        })
            this.setState({ posts })
    }

    onDelete(id) {
        const posts = this.state.posts.filter(item => item.id !== id)
            this.setState({ posts })
    }

    createNotice(value) {
        const newNotice = {
            label: value,
            important: false,
            id: String(this.state.posts.length),
            visible: true
        }

        this.setState(({ posts }) => ({ posts: [...posts, newNotice] }))
    }
    createTag(value,id){

        const newTag = {
            label: value,
            important: false,
            id: String(id)
        }

        this.setState(({ tags }) => ({ tags: [...tags, newTag] }))
    }

    updateState(tag){
        let newState = this.state.posts.map(el=>{
           el.label.indexOf(tag)>=0? el.visible=true:el.visible=false;
           return el
        })
        const newNotice = {
            label: 'value',
            important: false,
            id: String(1)
        }

        this.setState(({ posts }) => ({ posts: [ ...newState] }))
    }
    render() {
        return (
            <AppBlock>
             <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <ul>
                    <Tags posts={this.state.tags}
                          onLike={this.onLike}
                          onImportant={this.onImportant}
                          onDelete={this.onDelete}
                          updateState={this.updateState}/>
                </ul>

                <PostList
                    posts={this.state.posts}
                    onLike={this.onLike}
                    onImportant={this.onImportant}
                    onDelete={this.onDelete}
                 />

                <PostAddForm createNotice={this.createNotice}  createTag ={this.createTag}/>
            </AppBlock>

        )
    }
}

export default App;