import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/About';
import NotFound from './components/Error';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'cows are great!',
        completed: false
      },
      {
        id: 2,
        title: 'cows are great!',
        completed: false
      },
      {
        id: 3,
        title: 'cows are great!',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo

      })
    })
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length+1,
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos, newTodo]});
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
             <Route exact path="/" render={props => (
            <React.Fragment>
             <AddTodo addTodo={this.addTodo}/>
             <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )}/>
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
          </Switch>
        </div>
      </Router> 
    );
  }

}

export default App;
