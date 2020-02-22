import React from 'react';
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import uuid from 'uuid'

class App extends React.Component {
  state = {
    items:[],
      id: uuid(),
      item: '',
      editItem: false
  }

  handleChange = (event) => {
    this.setState({item: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItemsList = [...this.state.items,newItem]

    this.setState({
      items: updatedItemsList,
      item: '',
      id: uuid(),
      editItem: false
    })  
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({items: filteredItems})
  }
  
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id:id,
      editItem: true
    })
  }

  clearList = () => {
    this.setState({items: []})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}/>
            
            <TodoList
            items={this.state.items}
            handleEdit={this.handleEdit}
            clearList={this.clearList}
            handleDelete={this.handleDelete}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
