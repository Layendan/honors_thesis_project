<script lang="ts">
	import type { Eval } from '$lib/scripts/functions';

	export let functionType: typeof Eval;
	let code = functionType.code;

	let tab = 0;
	let result = '';

	async function runFunction() {
		result = 'awaiting result...';
		try {
			result = await functionType.runFunction(code);
		} catch (e) {
			result = e as string;
		}
	}
</script>

<div class="mockup-browser border bg-base-300">
	<div class="mockup-browser-toolbar">
		<div class="input lowercase"><slot name="title" /></div>
	</div>
	<div class="max-w-fit mx-auto mb-2">
		<div role="tablist" class="tabs tabs-boxed">
			<button role="tab" class="tab" class:tab-active={tab === 0} on:click={() => (tab = 0)}>
				Description
			</button>
			<button role="tab" class="tab" class:tab-active={tab === 1} on:click={() => (tab = 1)}>
				Code
			</button>
			<button role="tab" class="tab" class:tab-active={tab === 2} on:click={() => (tab = 2)}>
				More Information
			</button>
			<!-- <button role="tab" class="tab" class:tab-active={tab === 3} on:click={() => (tab = 3)}>
				Benchmarks
			</button> -->
		</div>
	</div>
	<div class="flex flex-col justify-center p-4 bg-base-100">
		{#if tab === 0}
			<slot name="description" />
		{:else if tab === 1}
			<!-- Left side textarea input, right side result -->
			<div class="flex flex-row gap-4 h-96">
				<div class="flex flex-col w-1/2">
					<textarea
						class="w-full h-full resize-none p-4 textarea textarea-primary"
						bind:value={code}
					/>
					<button class="btn btn-primary mt-4" on:click={runFunction}> Run </button>
				</div>
				<div class="flex flex-col w-1/2">
					<pre
						class="w-full h-full bg-base-200 p-4 break-words whitespace-normal">{result}</pre>
				</div>
			</div>
		{:else if tab === 2}
			<slot name="more-information" />
		{:else if tab === 3}
			<slot name="benchmarks" />
		{/if}
	</div>
</div>
