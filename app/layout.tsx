import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "next-themes";
// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { TrpcProvider } from "@/lib/trpc/TrpcProvider";
import { headers } from "next/headers";
import { ClerkProvider } from "@/lib/auth/ClerkProvider";
import Link from "next/link";
// import { ThemeSwitchButton } from "@/components/theme-switch-button";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Sportball",
	description: "Scores, stats, and updates for your favorite sports",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<ClerkProvider>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<NuqsAdapter>
						<TrpcProvider headers={headers()}>
							<ThemeProvider
								disableTransitionOnChange
								attribute="class"
								defaultTheme="system"
								enableSystem
							>
								<nav className="border-b border-border bg-background">
									<div className="container flex items-center justify-between">
										<Link
											className="inline-flex justify-center gap-2 py-2 px-2 group"
											href="/"
										>
											<span className="text-lg leading-none py-0.5">◍</span>
											<span className="group-hocus:underline">Sportsball</span>
										</Link>
										<div className="flex items-center gap-3">
											<Link
												className="inline-flex py-2 px-2 hocus:underline"
												href="/nba"
											>
												NBA
											</Link>
											<Link
												className="inline-flex py-2 px-2 hocus:underline"
												href="/nfl"
											>
												NFL
											</Link>
										</div>
									</div>
								</nav>
								<main className="container">
									{/* <SignedOut>
										<SignInButton />
									</SignedOut>
									<SignedIn>
										<UserButton />
									</SignedIn> */}
									{/* <ThemeSwitchButton>Toggle</ThemeSwitchButton> */}
									{children}
								</main>
							</ThemeProvider>
						</TrpcProvider>
					</NuqsAdapter>
				</body>
			</ClerkProvider>
		</html>
	);
}
