import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Title: </label>
                    <input id="title" name="title" value={this.state.title} onChange={this.onChange} />
                    <br />
                    <br />
                    <label>Body: </label>
                    <textarea id="body" name="body" value={this.state.body} onChange={this.onChange} />
                    <br /><br />
                    <button>Sumbit</button>
                </form>
            </div>
        )
    }
}

export default PostForm