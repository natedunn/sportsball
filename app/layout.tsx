import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "next-themes";
// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { TrpcProvider } from "@/lib/trpc/TrpcProvider";
import { headers } from "next/headers";
import { ClerkProvider } from "@/lib/auth/ClerkProvider";
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
