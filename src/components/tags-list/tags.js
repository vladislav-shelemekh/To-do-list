import React from "react";



class Tags extends React.Component {
    render() {
        const {posts, updateState} = this.props;

        

        function addTask() {
            updateState(this.label);
        }
        return (<div>

                {posts.map(item => {
                    return (
                        <li key={item.id} className="" onClick={addTask.bind(item)}>
                            {item.label}
                        </li>
                    )
                })}
            </div>
        )
    }
}


export default Tags;