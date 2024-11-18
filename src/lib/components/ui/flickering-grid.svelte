<script lang="ts" module>
	// Define prop types
	export type FlickeringGridProps = {
		squareSize?: number;
		gridGap?: number;
		flickerChance?: number;
		color?: string;
		width?: number;
		height?: number;
		class?: string;
		maxOpacity?: number;
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	// Define props using runes
	const props: FlickeringGridProps = $props();

	// State management
	let canvas: HTMLCanvasElement;
	let isInView = $state(false);
	let memoizedColor = $state('');

	function toRGBA(color: string) {
		if (typeof window === 'undefined') {
			return `rgba(0, 0, 0,`;
		}
		const canvas = document.createElement('canvas');
		canvas.width = canvas.height = 1;
		const ctx = canvas.getContext('2d');
		if (!ctx) return 'rgba(255, 0, 0,';
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, 1, 1);
		const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
		return `rgba(${r}, ${g}, ${b},`;
	}

	$effect(() => {
		memoizedColor = toRGBA(props.color ?? 'rgb(255, 255, 255)');
	});

	function setupCanvas() {
		const canvasWidth = props.width || canvas.clientWidth;
		const canvasHeight = props.height || canvas.clientHeight;
		const dpr = window.devicePixelRatio || 1;
		canvas.width = canvasWidth * dpr;
		canvas.height = canvasHeight * dpr;
		canvas.style.width = `${canvasWidth}px`;
		canvas.style.height = `${canvasHeight}px`;
		const cols = Math.floor(canvasWidth / ((props.squareSize ?? 4) + (props.gridGap ?? 6)));
		const rows = Math.floor(canvasHeight / ((props.squareSize ?? 4) + (props.gridGap ?? 6)));

		const squares = new Float32Array(cols * rows);
		for (let i = 0; i < squares.length; i++) {
			squares[i] = Math.random() * (props.maxOpacity ?? 0.3);
		}

		return { canvasWidth, canvasHeight, cols, rows, squares, dpr };
	}

	function updateSquares(squares: Float32Array, deltaTime: number) {
		for (let i = 0; i < squares.length; i++) {
			if (Math.random() < (props.flickerChance ?? 0.3) * deltaTime) {
				squares[i] = Math.random() * (props.maxOpacity ?? 0.3);
			}
		}
	}

	function drawGrid(
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		cols: number,
		rows: number,
		squares: Float32Array,
		dpr: number
	) {
		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = 'transparent';
		ctx.fillRect(0, 0, width, height);

		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				const opacity = squares[i * rows + j];
				ctx.fillStyle = `${memoizedColor}${opacity})`;
				ctx.fillRect(
					i * ((props.squareSize ?? 4) + (props.gridGap ?? 6)) * dpr,
					j * ((props.squareSize ?? 4) + (props.gridGap ?? 6)) * dpr,
					(props.squareSize ?? 4) * dpr,
					(props.squareSize ?? 4) * dpr
				);
			}
		}
	}

	let animationFrameId: number;

	onMount(() => {
		if (!canvas) {
			return;
		}
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			return;
		}
		let { canvasWidth, canvasHeight, cols, rows, squares, dpr } = setupCanvas();

		let lastTime = 0;

		const animate = (time: number) => {
			if (!isInView) return;
			const deltaTime = (time - lastTime) / 1000;
			lastTime = time;

			updateSquares(squares, deltaTime);
			drawGrid(ctx, canvasWidth * dpr, canvasHeight * dpr, cols, rows, squares, dpr);
			animationFrameId = requestAnimationFrame(animate);
		};

		const handleResize = () => {
			({ canvasWidth, canvasHeight, cols, rows, squares, dpr } = setupCanvas());
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				isInView = entry.isIntersecting;
			},
			{ threshold: 0 }
		);

		observer.observe(canvas);

		window.addEventListener('resize', handleResize);

		$effect(() => {
			if (isInView) {
				animationFrameId = requestAnimationFrame(animate);
			}
		});

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationFrameId);
			observer.disconnect();
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="pointer-events-none size-full {props.class}"
	style="width: {props.width || '100%'}; height: {props.height || '100%'};"
></canvas>
