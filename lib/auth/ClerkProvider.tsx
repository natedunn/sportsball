"use client";

import { ClerkProvider as Provider } from "@clerk/nextjs";

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
	return <Provider>{children}</Provider>;
};
