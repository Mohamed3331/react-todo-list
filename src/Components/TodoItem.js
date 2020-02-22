import React from 'react';

class TodoItem extends React.Component {
    render() {
        const {title, DeleteItem, EditItem} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-success" onClick={EditItem}>
                            <i className="fas fa-pen"></i>
                        </span>
                        <span className="mx-3 text-danger" onClick={DeleteItem}>
                            <i className="fas fa-trash"></i>
                        </span>
                    </div>
            </li>
        )
    }
}

export default TodoItem;