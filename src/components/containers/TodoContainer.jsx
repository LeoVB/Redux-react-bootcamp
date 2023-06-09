import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../../store/actions/actions';
import TodoList from '../pure/TodoList';

const TodosContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => filterTodos(state.todosState, state.filterState));

  const onTodoClick = (id) => {
    dispatch(toggleTodo(id));
  };

  return <TodoList todos={todos} onTodoClick={onTodoClick} />;
};

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

export default TodosContainer;
