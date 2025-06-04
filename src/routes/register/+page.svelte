<script lang="ts">
	import type {PageProps} from './$types';
	import InputElement from '../../componenets/ui/InputElement.svelte';
	let {form}: PageProps = $props()
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</svelte:head>
<section>
	<div>
		<form method="POST" action="?/register" class="registerForm">

			<InputElement
				class="inputElement"
				name="name"
				label="שם תצוגה" />

			<InputElement
				class="inputElement"
				name="username"
				label="שם משתמש" />
			<InputElement
				class="inputElement"
				name="password"
				type="password"
				label="סיסמה" />
			<InputElement
				class="inputElement"
				name="conf_password"
				type="password"
				label="אישור סיסמה" />

			<button class="loginButton" type="submit">Register</button>
		</form>

		{#if form?.success}
			<p>Registered successfully!</p>
			<p>response: {JSON.stringify(form.response)}</p>
		{/if}
		{#if !(form?.success)}
			<p>Failed to register</p>
			<p>Response: {JSON.stringify(form?.response)}</p>
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

	.loginButton {
			margin-top: 1rem;
			width: auto;
			scale: 1.5;
			text-align: center;
			padding: 0.5rem 1rem;
			border: 1px black solid;
			border-radius: 0.5em;
			transition-property: scale, background-color;
			transition-duration: 0.1s;
			transition-timing-function: ease-in-out;
  }

	.loginButton:hover {

      transition-property: scale, background-color;
      transition-duration: 0.1s;
      transition-timing-function: ease-in-out;

      cursor: pointer;
			scale: 1.6;
	}


</style>