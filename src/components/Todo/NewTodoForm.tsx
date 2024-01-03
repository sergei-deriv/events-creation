import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return (
    <div>
      <h2>NewTodoForm</h2>
      <form action={newTodo}>
        <input name='todoName' type='text' className="border border-black/25"/>
        <button type="submit">new todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
