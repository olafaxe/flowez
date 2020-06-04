<script>
  export let item;
</script>

<style>
  .flow--box {
    width: 125px;
    background-color: #cecece;
    border: solid 1px #5a5a5a;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(156, 156, 156, 1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(156, 156, 156, 1);
    box-shadow: 10px 10px 5px 0px rgba(156, 156, 156, 1);
  }
  .flow--img__next {
    width: 125px;
  }
  .flow--img__back {
    width: 75px;
  }
  .flex--arrow {
    display: flex;
  }
  .terminator__shape {
    width: 125px;
    background-color: #cecece;
    border: solid 1px #5a5a5a;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(156, 156, 156, 1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(156, 156, 156, 1);
    box-shadow: 10px 10px 5px 0px rgba(156, 156, 156, 1);
    border-radius: 50%;
  }

  .decision__shape {
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom-color: #cecece;
    position: relative;
    top: -50px;
  }
  .decision__shape:after {
    content: "";
    position: absolute;
    left: -50px;
    top: 50px;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top-color: #cecece;
  }
  .decision__shape p {
    position: absolute;
    top: 10px;
    right: -10px;
  }
</style>

<div class="flex--arrow">
  {#if item.type === 'terminatorstart' || item.type === 'terminatorend'}
    <div class="terminator__shape" on:load={e => getXY(e)}>
      <p>{item.name}</p>
    </div>
  {:else if item.type === 'decision'}
    <div class="decision__shape" on:load={e => getXY(e)}>
      <p>{item.name}</p>
    </div>
  {:else}
    <div class="flow--box" on:load={e => getXY(e)}>
      <p>{item.name}</p>
    </div>
  {/if}
</div>

<div class="arrows">
  {#if item.otherConnector}
    <img class="flow--img__back" src="../images/backOther.png" alt="next" />
    <img class="flow--img__back" src="../images/nextOther.png" alt="next" />
  {/if}
  {#if item.connectors && item.type !== 'decision'}
    <img class="flow--img__next" src="../images/next.png" alt="next" />
  {/if}
</div>
