<script>
	import InputElement from './InputElement.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</svelte:head>
<section>
	<div>
		<form class="registerForm">

			<InputElement class="inputElement" name="name" label="Name" />

			<InputElement class="inputElement" name="username" label="Username" />

			<InputElement class="inputElement" name="phone_number" type="tel" label="Phone Number" />

			<button class="registerButton" type="submit">Register</button>
		</form>
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