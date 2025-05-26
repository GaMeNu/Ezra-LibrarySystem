<script lang="ts">
	import type {PageProps} from './$types';
	import InputElement from './InputElement.svelte';
	let {data, form}: PageProps = $props()
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</svelte:head>
<section>
	<div>
		<form method="POST" action="?/register" class="registerForm">

			<InputElement class="inputElement" name="name" label="Name" />

			<InputElement class="inputElement" name="username" label="Username" />

			<button class="registerButton" type="submit">Register</button>
		</form>
		{#if form?.success}
			<p>Register button pressed!</p>
			<p>Name: {JSON.stringify(form)}</p>
		{/if}
	</div>
</section>

<style>

		:global(body) {
				font-family: Roboto, sans-serif;
		}

	.registerForm {
			display: block;
      margin-right: auto;
      margin-left: auto;
			text-align: center;
	}

	:global(.inputElement) {
			margin-right: auto;
			margin-left: auto;
			display: flex;
			text-align: left;
			justify-content: center;
	}

	.registerButton {
			text-align: center;
	}


</style>