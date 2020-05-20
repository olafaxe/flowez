<script>
  export let flowFunction;
  export let flowName;

  import { currentFlow } from "../stores.js";

  let name;

  console.log($currentFlow);
</script>

<style>
  .flowcreator--container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<form
  on:submit|preventDefault={() => (name = '')}
  class="flowcreator--container">
  <label for={flowName} id={flowName}>{flowName}</label>
  <input id={flowName} type="text" bind:value={name} />
  <input type="submit" on:click={() => flowFunction(name)} />
</form>
