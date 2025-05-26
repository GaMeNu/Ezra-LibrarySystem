<script lang="ts">

	import { onMount } from 'svelte';
	import config from '../../config/config';

	const opts = [
		{pk:0, name:"GET"},
		{pk:1, name:"HEAD"},
		{pk:2, name:"POST"},
		{pk:3, name:"PUT"},
		{pk:4, name:"DELETE"},
		{pk:5, name:"OPTIONS"},
		{pk:6, name:"PATCH"},
	]

	let headersRaw: string;
	let bodyRaw: string;


	let path: string = "/api/test";
	let methodIndex: number = 0;
	let method = opts[methodIndex];

	let data: { text: string } = {text: "Hello! This is a default message."};
	async function fetchData() {
		let headers = new Headers();
		if (headersRaw != null && headersRaw.trim() !== "") {
			let headersRows = headersRaw.split(/\n/);
			headersRows.forEach((headerRow) => {
				let headerSplit = headerRow.split(/:/);
				headers.set(headerSplit[0].trim(), headerSplit[1].trim());
			})
		}

		headers.forEach((value, key, parent) => {
			console.log(`${key}: ${value}`);
		})
		console.log(config.apiUrl);
		let bodyChecked: string | null;
		if (["GET", "HEAD"].includes(method.name)) {
			bodyChecked = null;
		} else {
			bodyChecked = bodyRaw;
		}
		const response = await fetch(`/api/route-test?url=${path}`, {
			method: method.name,
			headers: headers,
			body: bodyChecked,
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
<select class="inputThing" style="height: 1.5rem;" bind:value={methodIndex}>
	{#each opts as opt (opt.pk)}
		<option value={opt.pk}>{opt.name}</option>
	{/each}
</select>

<h3>HEADERS</h3>
<textarea class="textArea" bind:value={headersRaw}></textarea>

<h3>BODY (Available only on some requests)</h3>
<textarea class="textArea" bind:value={bodyRaw}></textarea>

<button class="inputThing" onclick={fetchData} >SEND</button>

<div>
	<p class="jsonOut">
		{JSON.stringify(data)}
	</p>
</div>

<style>
		@font-face {
        font-family: 'JetBrains Mono';
        src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Bold-Italic.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Bold-Italic.woff') format('woff');
        font-weight: 700;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Bold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-ExtraBold-Italic.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-ExtraBold-Italic.woff') format('woff');
        font-weight: 800;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-ExtraBold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-ExtraBold.woff') format('woff');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Italic.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Italic.woff') format('woff');
        font-weight: 400;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Medium-Italic.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Medium-Italic.woff') format('woff');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Medium.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }


    .inputThing {
				margin-bottom: 1rem;
				font-family: 'JetBrains Mono', "Fira Code", monospace;
		}

		.textArea {
				font-family: 'JetBrains Mono', "Fira Code", monospace;
				margin-bottom: 1rem;
				height: 6rem;
				font-size: 1.2rem;
		}

		.jsonOut {
				font-family: 'JetBrains Mono', "Fira Code", monospace;
				font-size: 1.5rem;
		}
</style>