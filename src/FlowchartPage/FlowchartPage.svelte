<script>
  import { location, flowcharts, currentFlow } from "../stores.js";
  import { navigate } from "svelte-routing";
  import { fly } from "svelte/transition";

  import CreateFlow from "../CreateFlow/CreateFlow.svelte";
  import EditFlow from "../EditFlow/EditFlow.svelte";

  const backHandler = () => {
    navigate(`/flowcharts`, { replace: true });
  };
</script>

<style>
  .flowchartpage--container {
    background-color: #ccccff;
    border: solid 1px #ccccf0;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(156, 156, 156, 1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(156, 156, 156, 1);
    box-shadow: 10px 10px 5px 0px rgba(156, 156, 156, 1);
    padding: 1rem;
    text-align: center;
    margin: 5px;
    width: 75%;
  }

  .flow--items {
    display: flex;
  }
</style>

<button in:fly={{ x: 200, duration: 2000 }} on:click={() => backHandler()}>
  Back
</button>

{#each $flowcharts as flowchart}
  {#if flowchart._id === $location}
    <CreateFlow {flowchart} />
    <div class="flowchartpage--container" in:fly={{ y: 200, duration: 2000 }}>
      <h3>{flowchart._id}</h3>
      <p>{flowchart.description}</p>
      <div class="flow--items">
        {#each $currentFlow as item}
          {#if item.owner === flowchart._id}
            <EditFlow {item} />
          {/if}
        {/each}
      </div>
    </div>
  {/if}
{/each}
