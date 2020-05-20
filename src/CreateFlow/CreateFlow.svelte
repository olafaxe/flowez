<script>
  export let flowchart;
  import { currentFlow } from "../stores.js";
  import CreateFlowForm from "./CreateFlowForm.svelte";

  let flowOptions = $currentFlow;

  let ID = function() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  let Node = function(owner, id, name, type, connectors) {
    (this.owner = owner), (this.id = id);
    this.name = name;
    this.type = type;
    this.connectors = connectors;
  };

  const addNodeHandler = name => {
    if (name === "") {
      return;
    }
    let owner = flowchart._id;
    let id = ID();
    let type = "";
    let connectors = [];
    let node = new Node(owner, id, name, type, connectors);
    currentFlow.update(state => [...state, node]);
  };
</script>

<style>

</style>

<CreateFlowForm flowFunction={addNodeHandler} {flowOptions} />
