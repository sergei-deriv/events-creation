'use client';

import { useState } from 'react';

const NewTodoForm = () => {
  const [state, setState] = useState('');

  return (
    <div>
      <h2>NewTodoForm</h2>
      <form>
        <input type='text' />
      </form>
    </div>
  );
};

export default NewTodoForm;
