import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import  "./app.css";
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

class App extends React.Component {
    state = {
        posts: [
            {label: 'Notice 1', important: false, like: false, id: '0' },
            {label: 'Notice 2', important: false, like: false, id: '1' },
            {label: 'Notice 3', important: false, like: false, id: '2' }
        ],
        likes: []
    }

    constructor(props) {
        super(props);
        this.onLike = this.onLike.bind(this)
        this.onImportant = this.onImportant.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.createNotice = this.createNotice.bind(this);
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
            like: false,
            id: String(this.state.posts.length)
        }

        this.setState(({ posts }) => ({ posts: [...posts, newNotice] }))
    }

    render() {
        return (
            <AppBlock>
             <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>  
                <PostList
                    posts={this.state.posts}
                    onLike={this.onLike}
                    onImportant={this.onImportant} 
                    onDelete={this.onDelete}
                 />
                <PostAddForm createNotice={this.createNotice} />    
            </AppBlock>
        
        )
    }
}

export default App;
