'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const newTodo = async (formData: FormData) => {
  const todo = await db.todo.create({
    data: {
      content: String(formData.get('todoName')),
    },
  });

  revalidatePath('/todos');
};
