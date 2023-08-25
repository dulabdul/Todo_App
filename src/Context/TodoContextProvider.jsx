import { useContext, createContext, useState, useEffect } from 'react';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import axios from 'axios';
import PropTypes from 'prop-types';
const TodoContext = createContext();
export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: {
            completed: false,
          },
        }
      );
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
      Swal.fire('Yeyy!', 'Todo sukses didelete!', 'success');
    } catch (error) {
      console.error('Error deleting todo:', error);
      Swal.fire('upss!', 'Todo gagal didelete!', 'error');
    }
  };
  const handleAddTodo = async () => {
    if (!newTodo) return;

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          title: newTodo,
          completed: false,
        }
      );
      setTodos([response.data, ...todos]);
      Swal.fire('Yeyy!', 'Todo sukses ditambahkan!', 'success');

      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
      Swal.fire('Yeyy!', 'Todo gagal ditambahkan!', 'delete');
    }
  };
  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setNewTodo(todo.title);
  };
  const handleCompletedTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleUpdateTodo = async () => {
    if (!editTodo || !newTodo) return;

    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${editTodo.id}`,
        {
          ...editTodo,
          title: newTodo,
        }
      );
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodo.id ? { ...response.data } : todo
      );
      setTodos(updatedTodos);
      Swal.fire('Yeyy!', 'Todo sukses diupdate!', 'success');

      setEditTodo(null);
      setNewTodo('');
    } catch (error) {
      console.error('Error updating todo:', error);
      Swal.fire('Yeyy!', 'Todo gagal diupdate!', 'error');
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <TodoContext.Provider
      value={{
        filteredTodos,
        handleAddTodo,
        handleDeleteTodo,
        handleEditTodo,
        handleCompletedTodo,
        handleUpdateTodo,
        searchQuery,
        setSearchQuery,
        setEditTodo,
        setNewTodo,
        editTodo,
        newTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
}

TodoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
