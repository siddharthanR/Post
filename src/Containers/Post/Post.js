import React from 'react';
import TextField from '../../Components/TextField/TextField'
import Button from '../../Components/Button/Button'

class Post extends React.Component {
    render() {
        return(
            <div>
                <TextField id={"titleId"} name={"title"} placeholder={"Title goes here"}/>
                <TextField id={"postId"} name={"post"} placeholder={"Post goes here"}/>
                <Button name={"Submit"}/> 
            </div>
        )
    }
}

export default Post;