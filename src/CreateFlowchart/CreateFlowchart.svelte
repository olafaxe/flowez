<script>
  import { BASE_URL } from "../config.js";
  let description = "";
  let name = "";

  import { flowcharts } from "../stores.js";
  import { fade } from "svelte/transition";

  const createFlowchartHandler = (n, d) => {
    if (n === "" || d === "") {
      return;
    }

    let chart = {};
    chart.name = n;
    chart.description = d;
    (async () => {
      const res = await fetch(`${BASE_URL}/flowcharts`, {
        method: "POST",
        body: JSON.stringify(chart),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const dataChart = await res.json();
      await flowcharts.update(state => [...dataChart, ...state]);
    })();
    name = "";
    description = "";
  };
</script>

<style>
  /* your styles go here */
  .container {
    display: flex;
    flex-direction: column;
    padding: 5rem;
  }
</style>

<!-- markup (zero or more items) goes here -->
<form on:submit|preventDefault in:fade class="container">
  <div>
    <inputLabel for="name">Name:</inputLabel>
    <input id="name" bind:value={name} />
    <inputLabel for="content">Description:</inputLabel>
    <input id="content" bind:value={description} />
  </div>
  <input
    type="submit"
    on:click={() => {
      createFlowchartHandler(name, description);
    }} />
</form>
