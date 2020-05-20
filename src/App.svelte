<script>
  import { Router, Link, Route, link } from "svelte-routing";
  import Landingpage from "./Landingpage/Landingpage.svelte";
  import Flowchart from "./Flowchart/Flowchart.svelte";
  import FlowchartList from "./FlowchartList/FlowchartList.svelte";
  import FlowchartPage from "./FlowchartPage/FlowchartPage.svelte";
  import CreateFlowchart from "./CreateFlowchart/CreateFlowchart.svelte";
</script>

<style>
  .container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .nav--header {
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>

<Router>
  <nav class="nav--header">
    <Link class="navlink" to="/">Home</Link>
    <Link class="navlink" to="flowcharts">List</Link>
  </nav>
  <Route path="/">
    <main class="container">
      <Landingpage />
    </main>
  </Route>
  <Route path="flowcharts">
    <main class="container">
      <FlowchartList />
    </main>
  </Route>
  <Route path="flowcharts/:id">
    <main class="container">
      <FlowchartPage />
    </main>
  </Route>
</Router>
