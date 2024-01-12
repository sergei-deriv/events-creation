import { NextResponse } from 'next/server';

export const GET = async (req: Request, res: Response) => {
  return NextResponse.json({ message: 'hello' });
};

export const POST = async (req: Request, res: Response) => {
  const data = await req.json();
  return NextResponse.json({ message: data });
};
