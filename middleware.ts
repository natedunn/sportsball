import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
	"/sign-in(.*)",
	"/sign-up(.*)",
	"/",
	"/nba",
	"/nfl",
	"/api/trpc(.*)",
]);

export default clerkMiddleware(
	async (auth, request) => {
		if (!isPublicRoute(request)) {
			await auth.protect();
		}
	},
	{ domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN }
);

export const config = {
	matcher: [
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
	],
};
