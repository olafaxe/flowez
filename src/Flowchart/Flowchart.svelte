<script>
  // your script goes here
  export let flowchart;
  import { flowcharts, location } from "../stores.js";
  import { fade } from "svelte/transition";
  import { navigate } from "svelte-routing";

  const deletePostHandler = id => {
    fetch(`http://localhost:8000/flowcharts/${id}`, {
      method: "DELETE"
    });

    flowcharts.update(oldValue =>
      oldValue.filter(oldchart => flowchart._id !== oldchart._id)
    );
  };

  const navigateHandler = e => {
    location.set(e);
    navigate(`/flowcharts/${e}`, { replace: true });
  };
  console.log(flowchart);
</script>

<style>
  /* your styles go here */
  .flowchart {
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
  .flowchart--button_container {
    display: flex;
    justify-content: space-evenly;
  }
  p {
    cursor: default;
  }
</style>

<!-- markup (zero or more items) goes here -->

<!-- content here -->
<div in:fade class="flowchart">
  <div class="flowchart--button_container">
    <button on:click={() => navigateHandler(flowchart._id)}>INSPECT</button>
    <button on:click={() => deletePostHandler(flowchart._id)}>REMOVE</button>
  </div>
  <div>
    <p>{flowchart.name}</p>
    <h2>{flowchart.description}</h2>
  </div>

</div>
