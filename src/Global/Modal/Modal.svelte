<script>
  export let arrayMaker;
  export let modalHandler;
  export let item;
  import { currentFlow, types } from "../../stores.js";
  import { createEventDispatcher, onDestroy } from "svelte";

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");
  let modal;
  const handle_keydown = e => {
    if (e.key === "Escape") {
      close();
      return;
    }
    if (e.key === "Tab") {
      // trap focus
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);
      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;
      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;
      tabbable[index].focus();
      e.preventDefault();
    }
  };
  const previously_focused =
    typeof document !== "undefined" && document.activeElement;
  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }

  let selectedConnection;
  let selectedOtherConnection;
  let selectedType;

  const saveHandler = () => {
    if (selectedType !== "decision") {
      let arr = selectedConnection;
      item.connectors = arr;
    }
    if (selectedType === "decision") {
      let sel = selectedConnection;
      let arr = selectedOtherConnection;
      item.connectors = sel;
      item.otherConnector = arr;
    }
    item.type = selectedType;
    arrayMaker();
    modalHandler(false);
  };
  // console.log($currentFlow);

  const filterSelectionHandler = () => {
    $currentFlow.forEach(element => {
      if (element.type === "terminatorstart") {
        console.log("ele type: ", element.type);
        types.set(["process", "decision", "terminatorend"]);
      }
    });
  };
</script>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.2em;
    background: white;
  }
  button {
    display: block;
  }
</style>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={() => modalHandler(false)} />

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
  <form on:submit|preventDefault>
    <h1>{item.name}</h1>
    <h4>
      Connects to: {item.connectors ? item.connectors[0] : 'No connection yet'}
    </h4>
    <label for="type_of" name="type_of">Type of:</label>
    <select bind:value={selectedType} on:click={() => filterSelectionHandler()}>
      <option value={item.type ? item.type : 'No type'}>
        {item.type ? item.type : 'No type'}
      </option>
      {#each $types as type}
        <option value={type}>{type}</option>
      {/each}

    </select>
    <label for="connect_to" name="connect_to">Connect to:</label>
    <select bind:value={selectedConnection}>
      <option
        value={item.connectors !== '' ? item.connectors : 'No connection'}>
        {item.connectors !== '' ? item.connectors : 'No connection'}
      </option>
      {#each $currentFlow as connection}
        {#if connection !== item}
          <option value={connection.id}>{connection.name}</option>
        {/if}
      {/each}
    </select>
    {#if item.type === 'decision'}
      <label for="connect_to" name="connect_to">Other connector</label>
      <select bind:value={selectedOtherConnection}>
        <option
          value={item.otherConnector !== '' ? item.otherConnector : 'No other connector'}>
          {item.otherConnector !== '' ? item.otherConnector : 'No other connector'}
        </option>
        {#each $currentFlow as connection}
          {#if connection !== item}
            <option value={connection.id}>{connection.name}</option>
          {/if}
        {/each}
      </select>
    {/if}
  </form>
  <input tyoe="submit" value="save changes" on:click={() => saveHandler()} />
  <button on:click={() => modalHandler(false)}>Close</button>
</div>
