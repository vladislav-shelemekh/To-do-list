import React, {Component} from "react";
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


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Заметка 1', important: false, like: false, id: 1},
                {label: 'Заметка 2', important: false, like: false, id: 2},
                {label: 'Заметка 3', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this)    

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index +1)];

            return {
                data : newArr
            }
        })
    }

    searchPost(items, term) {
        if(term.length === 0) {
            return items
        }

        return items.filter(item => item.label.indexOf(term) > -1)

    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    filterPost(items, filter) {
        if(filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items 
        }

    }
    onFilterSelect(filter) {
        this.setState({filter})

    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

            return {
                data: newArr
            }
    })
}

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

            return {
                data: newArr
            }

        })
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)


        return (
            <AppBlock>
             <AppHeader
             liked={liked}
             allPosts={allPosts}
             />
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    />
                </div>  
                <PostList 
                posts={visiblePosts} 
                onDelete={this.deleteItem} 
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                onAdd={this.addItem}
                />    
            </AppBlock>
        
        )
    }
    
};




// class App extends React.Component {
//     state = {
//         posts: [
//             {label: 'Не вмерла Украина', important: false, like: false, id: '0' },
//             {label: 'Вмерла Украина', important: false, like: false, id: '1' },
//             {label: 'Ще не вмерла Украина', important: false, like: false, id: '2' }
//         ],
//         likes: []
//     }

//     constructor(props) {
//         super(props);
//         this.onLike = this.onLike.bind(this)
//         this.onImportant = this.onImportant.bind(this);
//         this.onDelete = this.onDelete.bind(this);
//         this.createNotice = this.createNotice.bind(this);
//     }

//     onLike(id) {
//         const posts = this.state.posts.map(item => {
//             if (item.id === id) {
//                 item.like = !item.like
//             }
//             return item
//         })

//         this.setState({ posts })
//     }

//     onImportant(id) {
//         const posts = this.state.posts.map(item => {
//             if (item.id === id) {
//                 item.important = !item.important
//             }
//             return item
//         })
//             this.setState({ posts })
//     }

//     onDelete(id) {
//         const posts = this.state.posts.filter(item => item.id !== id)
//             this.setState({ posts })
//     }

//     createNotice(value) {
//         const newNotice = {
//             label: value,
//             important: false, 
//             like: false,
//             id: String(this.state.posts.length)
//         }

//         this.setState(({ posts }) => ({ posts: [...posts, newNotice] }))
//     }

//     render() {
//         return (
//             <AppBlock>
//              <AppHeader/>
//                 <div className="search-panel d-flex">
//                     <SearchPanel/>
//                     <PostStatusFilter/>
//                 </div>  
//                 <PostList
//                     posts={this.state.posts}
//                     onLike={this.onLike}
//                     onImportant={this.onImportant} 
//                     onDelete={this.onDelete}
//                  />
//                 <PostAddForm createNotice={this.createNotice} />    
//             </AppBlock>
        
//         )
//     }
// }

// export default App;