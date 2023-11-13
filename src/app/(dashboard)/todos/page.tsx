import TodoList from '@/components/Todo/TodoList';
import db from '@/utils/db';

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  const todos = await getData();
  return (
    <div>
      <h1>Todos:</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
