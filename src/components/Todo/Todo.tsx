'use client';

import { completeTodo } from '@/utils/actions';
import { useTransition } from 'react';

const Todo = ({ todo }: any) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <span className={`cursor-pointer ${todo.completed && 'line-through'}`} onClick={() => startTransition(() => completeTodo(todo.id))}>{todo.content}</span>
    </div>
  );
};

export default Todo;
