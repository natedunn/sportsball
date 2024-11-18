<script lang="ts">
	import type { State } from '$lib/schema/external/nba-scoreboard';
	import type { ClassValue } from 'tailwind-variants';

	import { cn } from '$lib/utils';

	type Props = {
		score: {
			away: number;
			home: number;
		};
		gameState: State;
		classes?: {
			wrapper?: ClassValue;
			score?: ClassValue;
		};
	};

	type TeamState = {
		state: 'active' | 'winner' | 'loser';
		score: number | null;
	};

	let { classes, gameState, score }: Props = $props();

	const getTeamState = (homeAway: 'home' | 'away'): TeamState => {
		if (gameState === 'in' || gameState == 'pre') {
			return {
				state: 'active',
				score: null
			};
		}

		if (
			(homeAway === 'home' && score.home > score.away) ||
			(homeAway === 'away' && score.away > score.home)
		) {
			return {
				state: 'winner',
				score: score[homeAway]
			};
		}
		return {
			state: 'loser',
			score: score[homeAway]
		};
	};
</script>

{#snippet teamScore(homeAway: 'home' | 'away')}
	{@const team = getTeamState(homeAway)}
	<div
		class={cn(
			'flex items-center gap-2 font-mono text-2xl font-bold sm:text-3xl md:text-4xl',
			team.state === 'winner' && '',
			team.state === 'loser' && 'opacity-50',
			classes?.score
		)}
	>
		{team.score}
	</div>
{/snippet}

<div class={cn('flex items-center gap-2', classes?.wrapper)}>
	{@render teamScore('away')}
	<div class="leading-0 text-xl font-bold opacity-50 sm:text-2xl md:text-3xl">—</div>
	{@render teamScore('home')}
</div>
