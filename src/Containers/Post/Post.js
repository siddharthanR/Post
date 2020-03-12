import React from 'react';
import TextField from '../../Components/TextField/TextField'
import Button from '../../Components/Button/Button'

class Post extends React.Component {
    render() {
        return(
            <div className="Post">
                <TextField type={"text"} id={"titleId"} name={"title"} placeholder={"Title goes here"}/>
                <TextField type={"text"} id={"postId"} name={"post"} placeholder={"Post goes here"}/>
                <Button type={"submit"} name={"Submit"}/> 
            </div>
        )
    }
}

export default Post;