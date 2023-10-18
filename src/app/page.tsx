import Image from 'next/image';

const getData = async () => {
  const data = await new Promise((res) =>
    setTimeout(() => res([1, 2, 3, 4]), 2000)
  );
  return data;
};

export default async function Home() {
  const data: any = await getData();
  console.log('data = ', data);

  return <h1>Data = {data}</h1>;
}
