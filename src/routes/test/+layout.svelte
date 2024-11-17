<script lang="ts">
	let { children, data } = $props();
</script>

<div>
	<div>This is the layout section: {data.message}</div>
	<div class="text-red-500">
		{@render children()}
	</div>
</div>
