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

  const addTerminatorStartHandler = (name, from, to) => {
    if (name === "") {
      return;
    }
    let terminatorStart = {
      owner: flowchart._id,
      id: ID(),
      name: name,
      type: "terminator",
      connectorTo: [""]
    };

    currentFlow.update(state => [...state, terminatorStart]);
  };

  const addProcessHandler = (name, from, to) => {
    if (name === "") {
      return;
    }
    let process = {
      owner: flowchart._id,
      id: ID(),
      name: name,
      type: "process",
      connectorTo: [""]
    };
    currentFlow.update(state => [...state, process]);
  };

  const addDecisionHandler = (name, from, to) => {
    if (name === "") {
      return;
    }
    let decision = {
      owner: flowchart._id,
      id: ID(),
      name: name,
      type: "decision",
      connectorTo: [""]
    };
    currentFlow.update(state => [...state, decision]);
  };

  const addTerminatorEndHandler = (name, from, to) => {
    if (name === "") {
      return;
    }
    let terminatorEnd = {
      owner: flowchart._id,
      id: ID(),
      name: name,
      type: "terminator",
      connectorTo: ["end"]
    };
    currentFlow.update(state => [...state, terminatorEnd]);
  };

  console.log($currentFlow);
</script>

<style>

</style>

<CreateFlowForm
  flowFunction={addTerminatorStartHandler}
  {flowOptions}
  flowName={'terminatorStart'} />
<CreateFlowForm
  flowFunction={addProcessHandler}
  {flowOptions}
  flowName={'process'} />
<CreateFlowForm
  flowFunction={addDecisionHandler}
  {flowOptions}
  flowName={'decision'} />
<CreateFlowForm
  flowFunction={addProcessHandler}
  {flowOptions}
  flowName={'terminatorEnd'} />
