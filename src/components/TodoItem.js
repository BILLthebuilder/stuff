import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroud: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                <p>{title}</p>
                <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
            </div>
        )
    }
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right'
}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
