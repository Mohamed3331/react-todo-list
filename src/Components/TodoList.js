import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    render() {
        const {items,handleEdit,clearList,handleDelete} = this.props
   
        return (
            <ul className="list-group my-5">
              <h3 className="text-capitalize text-center">Todo List</h3>
              {items.map(item => {return (<TodoItem key={item.id} title={item.title} DeleteItem={() => handleDelete(item.id)} EditItem={() => handleEdit(item.id)}/>) })}
              <button type="button" className="btn btn-danger btn-block text-uppercase mt-5" onClick={clearList}>Clear List</button>
            </ul>
        )
    }
}
  
export default TodoList