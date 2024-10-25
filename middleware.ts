import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { debug } from "console";

const isPublicRoute = createRouteMatcher([
	"/sign-in(.*)",
	"/sign-up(.*)",
	"/",
	"/nba",
]);

export default clerkMiddleware(
	async (auth, request) => {
		console.log("TESTING>>>>>>>>>>>>>>");

		if (!isPublicRoute(request)) {
			await auth.protect();
		}
	},
	{ debug: true, domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN }
);

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
