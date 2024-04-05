import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const code = await request.text();

	return new Response(JSON.parse(eval(code)), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
