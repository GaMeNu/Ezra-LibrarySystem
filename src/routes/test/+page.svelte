<script lang="ts">

	import { onMount } from 'svelte';

	const opts = [
		{pk:0, name:"GET"},
		{pk:1, name:"POST"},
		{pk:2, name:"FETCH"},
		{pk:3, name:"DELETE"},
	]

	let headersRaw: string;

	let path: string = "/api/test";
	let methodIndex: number = 0;
	let method = opts[methodIndex];

	let data: { text: string } = {text: "Hello! This is a default message."};
	async function fetchData() {
		console.log(method.name)
		const response = await fetch(path, {
			method: method.name
		})

		data = await response.json();
	}

	onMount(() => {
		methodIndex = 0;
	})

	$: method = opts[methodIndex]

</script>

<h1>API Tester</h1>

<h3>PATH</h3>
<input class="inputThing" type="text" bind:value={path}>

<h3>METHOD</h3>
<select class="inputThing" bind:value={methodIndex}>
	{#each opts as opt (opt.pk)}
		<option value={opt.pk}>{opt.name}</option>
	{/each}
</select>

<h3>HEADERS (Not yet available)</h3>
<textarea class="inputThing" bind:value={headersRaw} style="height: 6rem"></textarea>

<h3>PAYLOAD (Not yet available)</h3>
<textarea class="inputThing" bind:value={headersRaw} style="height: 6rem"></textarea>

<button class="inputThing" onclick={fetchData} >SEND</button>

<div>
	{data.text}
</div>

<style>
	.inputThing {
			margin-bottom: 1rem;
	}
</style>