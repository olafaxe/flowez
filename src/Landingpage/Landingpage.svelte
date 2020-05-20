<script>
  import { fade, fly } from "svelte/transition";
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
      refX="4"
      refY="6"
      orient="auto">
      <path d="M2,2 L2,11 L10,6 L2,2" style="fill: #000000;" />
    </marker>
  </defs>

  <line x1="150" y1="0" x2="350" y2="0" class="arrow" />
</svg>
