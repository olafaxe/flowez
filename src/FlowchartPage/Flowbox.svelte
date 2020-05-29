<script>
  export let item;

  const getXY = e => {
    console.log(e);
  };
</script>

<style>
  .flow--box {
    width: 125px;
    background-color: #fbff00;
    border: solid 1px #f32409;
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
</style>

<div class="flow--box" on:load={e => getXY(e)}>
  <p>{item.type}</p>
</div>
<div class="arrows">
  <img class="flow--img__next" src="../images/next.png" alt="next" />
  {#if item.otherConnector}
    <img class="flow--img__back" src="../images/back.png" alt="next" />
  {/if}
</div>
