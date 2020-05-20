<script>
  export let item;
  import { currentFlow } from "../stores.js";
  import Modal from "../Global/Modal/Modal.svelte";

  const removeHandler = id => {
    let filteredFlow = $currentFlow.filter(item => item.id !== id);
    currentFlow.set(filteredFlow);
  };

  let open = false;

  const modalHandler = condition => {
    open = condition;
    let newFlow = $currentFlow;
    currentFlow.set(newFlow);
  };
</script>

<style>
  .flow--item {
    background-color: #ccccf0;
    box-shadow: 0px 0px 0px 2px #5050cb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    margin: 0px 0px 10px 0px;
    padding: 5px 5px 5px 5px;
  }

  .flow--remove__item {
    background-color: red;
    color: #fff;
  }
</style>

{#if open}
  <Modal {item} {modalHandler} />
{/if}
<div class="flow--item" on:click={() => modalHandler(true)}>
  <div class="flow--remove__item" on:click={() => removeHandler(item.id)}>
    x
  </div>
  <p>{item.type}</p>
  <p>{item.name}</p>
</div>
