<script>
  import { onMount } from "svelte";
  import { flowcharts } from "../stores.js";
  import Flowchart from "../Flowchart/Flowchart.svelte";
  import CreateFlowchart from "../CreateFlowchart/CreateFlowchart.svelte";
  import { BASE_URL } from "../config.js";

  onMount(async () => {
    const res = await fetch(`${BASE_URL}/flowcharts`, {
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

</style>

<CreateFlowchart />
{#if $flowcharts}
  {#each $flowcharts as flowchart}
    <Flowchart {flowchart} />
  {/each}
{/if}
