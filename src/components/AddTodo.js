import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title:''
    }

    onChange = e => {
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input
                    type="text"
                    name="title" value={this.state.title}
                    placeholder="Add Todo ...."
                    style={{ flex: '10', padding: '5px' }}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{ flex: '1', cursor: 'pointer' }}
                />
            </form>
        )
    }
}
