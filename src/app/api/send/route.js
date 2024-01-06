import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const { email, subject, message } = data;
  console.log({ email, subject, message });

  try {
    const data = await res.send(`
	  <h1>Email sent!</h1>
	  <p>We have received your message and will get back to you as soon as possible
	  at ${email}. Thank you for reaching out to us.</p>
	  `);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
