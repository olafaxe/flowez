<script>
  import { onMount } from "svelte";
  import { flowcharts } from "../stores.js";
  import Flowchart from "../Flowchart/Flowchart.svelte";
  import CreateFlowchart from "../CreateFlowchart/CreateFlowchart.svelte";

  onMount(async () => {
    const res = await fetch(`http://localhost:8000/flowcharts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    const filterData = data.filter(item => !$flowcharts.includes(item));
    flowcharts.set(filterData);
  });
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 50%;
    overflow: scroll;
  }
</style>

<CreateFlowchart />
{#if $flowcharts}
  {#each $flowcharts as flowchart}
    <Flowchart {flowchart} />
  {/each}
{/if}
