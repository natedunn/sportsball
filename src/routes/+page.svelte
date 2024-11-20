<script lang="ts">
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
</script>

<div>
	<svg
		aria-hidden="true"
		class="absolute inset-0 -z-10 h-full w-full stroke-white/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
		<rect
			fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
			width="100%"
			height="100%"
			stroke-width={0}
		/>
	</svg>
	<div class="flex h-screen flex-col pt-24">
		<h1 class="text-pretty text-5xl font-semibold tracking-tight text-white sm:text-7xl">
			All the Sportsballing, none of the bullshit.
		</h1>
		<p class="mt-8 text-pretty text-xl font-medium text-gray-400 sm:text-xl/8">
			Check scores and updates for your favorite leagues like NBA, NFL,{' '}
			<span class="line-through">MLB</span>,{' '}
			<span class="line-through">WNBA</span>, and{' '}
			<span class="line-through">more</span>.
		</p>
		<div class="mt-8 inline-flex items-center gap-4">
			<a
				class="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-lg hover:bg-muted/80 hover:underline"
				href="/nba"
			>
				<span>NBA scores</span>
				<ArrowRight size={16} />
			</a>
			<a
				class="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-lg hover:bg-muted/80 hover:underline"
				href="/nfl"
			>
				<span>NFL scores</span>
				<ArrowRight size={16} />
			</a>
		</div>
	</div>
</div>
