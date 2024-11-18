<script lang="ts">
	import type { GamesByDateResponse as GamesByDate } from '$routes/api/nba/games-by-date/[date]/utils';
	import type { ClassValue } from 'clsx';

	import { cn } from '$lib/utils';

	import TeamFlickeringGrid from './team-flickering-grid.svelte';

	type Team = GamesByDate[0]['home'] | GamesByDate[0]['away'];

	type Props = {
		team: Team;
		homeAway: 'home' | 'away';
		classes?: {
			wrapper?: ClassValue;
			logo?: ClassValue;
			team?: ClassValue;
			seasonRecord?: ClassValue;
		};
	};

	let { team, homeAway, classes }: Props = $props();

	let isJazz = $derived(team.name === 'Jazz');
</script>

<div class={cn(`relative flex flex-col items-center gap-2 overflow-hidden`, classes?.wrapper)}>
	<div
		class={cn(
			'absolute inset-0 z-10 from-card from-40% to-transparent',
			homeAway === 'home' && 'bg-gradient-to-tr',
			homeAway === 'away' && 'bg-gradient-to-tl'
		)}
	></div>
	<TeamFlickeringGrid dark={team.darkColor} light={team.lightColor} />
	<div class="z-10 flex h-full flex-col items-center justify-center gap-2">
		<img
			class={cn('w-8 sm:w-10 md:w-12', classes?.logo, isJazz && 'dark:invert')}
			src={team.logo}
			alt={team.name}
			width={128}
			height={128}
		/>
		<div class="flex flex-col items-center">
			<span class={cn(`text-sm font-bold`, classes?.team)}>
				{team.name}
			</span>
			<span class={cn(`font-mono text-sm text-muted-foreground`, classes?.seasonRecord)}>
				{team.seasonRecord}
			</span>
		</div>
	</div>
</div>
