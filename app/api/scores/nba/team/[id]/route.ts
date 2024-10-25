import { type NextRequest } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const id = (await params).id;
	return new Response(`Hello from NBA API: ${id}`, request);
}
