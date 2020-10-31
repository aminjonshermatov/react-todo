import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

const TodoList = ({ todos, onToggle }) => {
    return (
        <ul style={styles.ul}>
            { todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index} onChange={onToggle} />
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
};

export default TodoList;