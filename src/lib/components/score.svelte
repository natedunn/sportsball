<script lang="ts">
	import type { State } from '$lib/schema/external/nba-scoreboard';
	import type { ClassValue } from 'tailwind-variants';

	import { cn } from '$lib/utils';

	type Props = {
		homeScore: number;
		awayScore: number;
		gameState: State;
		classes?: {
			wrapper?: ClassValue;
			score?: ClassValue;
		};
	};

	type TeamState = 'active' | 'winner' | 'loser';

	let { classes, gameState, homeScore, awayScore }: Props = $props();

	const getTeamState = (
		homeAway: 'home' | 'away',
		homeScore: number,
		awayScore: number
	): TeamState => {
		if (gameState === 'in' || gameState == 'pre') {
			return 'active';
		}

		if (
			(homeAway === 'home' && homeScore > awayScore) ||
			(homeAway === 'away' && awayScore > homeScore)
		) {
			return 'winner';
		}
		return 'loser';
	};

	let homeState = $derived.by(() => getTeamState('home', homeScore, awayScore));
	let awayState = $derived.by(() => getTeamState('away', homeScore, awayScore));
</script>

{#snippet teamScore(score: number, state: TeamState)}
	<div
		class={cn(
			'flex items-center gap-2 font-mono text-2xl font-bold sm:text-3xl md:text-4xl',
			state === 'winner' && '',
			state === 'loser' && 'opacity-50',
			classes?.score
		)}
	>
		{score}
	</div>
{/snippet}

<div class={cn('flex items-center gap-2', classes?.wrapper)}>
	{@render teamScore(awayScore, awayState)}
	<div class="leading-0 text-xl font-bold opacity-50 sm:text-2xl md:text-3xl">—</div>
	{@render teamScore(homeScore, homeState)}
</div>
