import NewTodoForm from '@/components/Todo/NewTodoForm';

const getData = async () => {
  const data = await new Promise((res) =>
    setTimeout(() => res([1, 2, 3, 4]), 2000)
  );
  return data;
};

export default async function Home() {
  // const data: any = await getData();
  // console.log('data = ', data);

  return (
    <div>
      <NewTodoForm />
    </div>
  );
}
