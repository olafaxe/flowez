<script>
  import { fade, fly, draw } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<style>
  .arrow {
    stroke: rgb(0, 0, 0);
    stroke-width: 2;
    marker-end: url(#markerArrow);
  }
</style>

<h1 in:fly={{ x: -200, duration: 2000 }}>Flow-e-z</h1>
<h4 in:fly={{ y: 200, duration: 2000 }}>making you flow easy since 2020</h4>

<svg height="210" width="500">
  <defs>
    <marker
      id="markerArrow"
      markerWidth="13"
      markerHeight="13"
      refX="6"
      refY="6"
      orient="auto">

      <path
        in:fly={{ x: 200, duration: 3500 }}
        d="M2,2 L2,11 L10,6 L2,2"
        style="fill: #000000;" />
    </marker>
  </defs>

  <polyline
    in:draw={{ duration: 3500, delay: 500, easing: quintOut }}
    points="150,10 350,10"
    fill="none"
    stroke="black"
    marker-end="url(#markerArrow)" />
</svg>
