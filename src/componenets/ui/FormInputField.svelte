<script lang="ts">
	let {
		label,
		name,
		type = "text",
		form,
		class: className = ""
	} = $props();

	let value: string = $state("");
	let eltId: string = "input_" + name;

</script>

<div class="{className}">
	<div class="inputWrapper">
		<label class="inputLabel" for="{eltId}">{label}</label>
		<div class="inputContainer">
			<input class="inputBox" id={eltId} type="{type}" name="{name}" bind:value>
		</div>
		{#if !(form?.success) && (form?.response?.offending_field === name)}
			<label class="errLabel" for="{eltId}">{form?.response?.message}</label>
		{/if}
	</div>
</div>

<style>
		.inputWrapper {
				display: table-cell;
				vertical-align: middle;
				margin: 1rem;
        overflow: visible;
				width: auto;
				text-align: right;
    }

		.inputLabel {
				display: inline-block;
				vertical-align: center;
				width: inherit;
				text-align: right;
				padding-bottom: 0.5em;
		}

    .inputContainer {
        display: flex;
        justify-content: center;
    }

		.inputBox {
				height: 2rem;
				width: 400px;
				max-width: 1000px;
				border: 2px black solid;
				border-radius: 1em;
				padding: 0 1rem;
				box-sizing: border-box;
		}
		
		@media only screen and (max-width: 600px) {
				.inputContainer {
						width: 200px;
        }
    }



</style>