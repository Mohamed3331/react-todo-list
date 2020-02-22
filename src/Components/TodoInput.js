import React from 'react'

class TodoInput extends React.Component {
  render() {
    const {item,handleChange,handleSubmit,editItem} = this.props

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input type="text" 
            className="form-control text-capitalize" 
            placeholder="Add Todo Item.."
            value={item}
            onChange={handleChange}/>
          </div>
          <button type="submit" disabled={item ? false : true} className={editItem ? "btn btn-block btn-success mt-3 text-uppercase" : "btn btn-block btn-primary mt-3 text-uppercase"}>{editItem ? "Edit Item" : "Add Item"}</button>
        </form>
      </div>
    )  
  }
}

export default TodoInput