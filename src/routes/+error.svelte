<script>
	import { page } from '$app/stores';
</script>

<div class="flex h-screen flex-col items-center bg-red-100 p-6 md:justify-center">
	<div
		class="inline-flex items-center justify-start gap-4 rounded-xl border-2 border-dashed border-red-500 bg-red-200/50 p-4"
	>
		<div class="rounded-lg bg-red-500 px-6 py-2 text-xl text-red-100">{$page.status}</div>
		<h1 class="text-xl font-bold text-red-500">{$page.error?.message}</h1>
	</div>
</div>
