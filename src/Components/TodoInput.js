import React from 'react'
import './todoStyle.css'

class TodoInput extends React.Component {
    state = {
        val: ''
    }
  
    handleSubmit = () => (
        <p>{this.state.val}</p>
    )

    handleChange = (event) => {
        this.setState({val: event.target.value})
    }

  render() {
    return (
        <>
            <div className="container-fluid">
                <div className="input-group flex-nowrap">
                    <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping">TodoList</span>
                    </div>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        aria-label="Username" 
                        aria-describedby="addon-wrapping"
                        onChange={this.handleChange}>
                    </input>
                </div>
                <br/>
                <button onClick={this.handleSubmit} type="button" className="btn btn-success btn-primary btn-lg">Success</button>
            </div>

            <p>{}</p>
        </>
    )
  }
}

export default TodoInput