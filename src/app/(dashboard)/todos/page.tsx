import TodoList from '@/components/Todo/TodoList';
import db from '@/utils/db';

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  // await new Promise((res, rej) => setTimeout(() => res(''), 2000)); // to see loading
  // await new Promise((res, rej) => setTimeout(() => rej(''), 2000)); // to show error
  const todos = await getData();
  return (
    <div>
      <h1>Todos:</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
