import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <button onClick$={() => console.log("counter")}>+1</button>
      <button onClick$={() => console.log("counter2")}>+2</button>
    </>
  );
});
