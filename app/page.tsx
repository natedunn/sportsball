import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<svg
				aria-hidden="true"
				className="absolute inset-0 -z-10 h-full w-full stroke-white/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
			>
				<defs>
					<pattern
						x="50%"
						y={-1}
						id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
						width={50}
						height={50}
						patternUnits="userSpaceOnUse"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				{/* <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
					<path
						d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
						strokeWidth={0}
					/>
				</svg> */}
				<rect
					fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
					width="100%"
					height="100%"
					strokeWidth={0}
				/>
			</svg>
			<div className="h-screen flex pt-24 flex-col">
				<h1 className="text-pretty text-5xl font-semibold tracking-tight text-white sm:text-7xl">
					All the Sportsballing, none of the bullshit.
				</h1>
				<p className="mt-8 text-pretty text-xl font-medium text-gray-400 sm:text-xl/8">
					Check scores and updates for your favorite leagues like NBA, NFL,{" "}
					<span className="line-through">MLB</span>,{" "}
					<span className="line-through">WNBA</span>, and{" "}
					<span className="line-through">more</span>.
				</p>
				<div className="mt-8 inline-flex items-center gap-4">
					<Link
						className="rounded-lg bg-muted px-4 py-2 hover:underline inline-flex items-center gap-2 hover:bg-muted/80 text-lg"
						href="/nba"
					>
						<span>NBA scores</span>
						<ArrowRight size={16} />
					</Link>
					<Link
						className="rounded-lg bg-muted px-4 py-2 hover:underline inline-flex items-center gap-2 hover:bg-muted/80 text-lg"
						href="/nfl"
					>
						<span>NFL scores</span>
						<ArrowRight size={16} />
					</Link>
				</div>
			</div>
		</div>
	);
}
