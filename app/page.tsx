import Link from "next/link";

export default function Home() {
	return (
		<div className="p-10">
			<Link href="/nba">Go to NBA scores</Link>
		</div>
	);
}
