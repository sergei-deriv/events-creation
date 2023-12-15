'use server';
import db from './db';

export const newTodo = async (content: string) => {
  const todo = await db.todo.create({
    data: {
      content,
    },
  });
};
