import { TrpcProvider } from "@/lib/trpc/TrpcProvider";
// import { ClerkProvider } from "@clerk/nextjs";
import { headers } from "next/headers";

export default function Providers({ children }: { children: React.ReactNode }) {
	return <TrpcProvider headers={headers()}>{children}</TrpcProvider>;
}
