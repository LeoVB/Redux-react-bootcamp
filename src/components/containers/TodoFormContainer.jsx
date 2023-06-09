import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import Todoform from '../pure/TodoForm'
import { useDispatch } from 'react-redux';

const TodoFormContainer = () => {
    const dispatch = useDispatch();
  
    const submit = (text) => {
      dispatch(addTodo(text));
    };
  
    return <Todoform submit={submit} />;
  };
  
  export default TodoFormContainer;