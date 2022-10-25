import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({ count: 123 });
  return (
    <>
      <span>{state.count}</span>
      <button onClick$={() => state.count++}>+1</button>
      <button onMouseMove$={() => console.log("counter2")}>+2</button>
      <div style={{height:500px}}>scroll</div>
      <Clock/>
    </>
  );
});

export const Clock = component$(() => {
  return <span>{new Date().toLocaleTimeString()}</span>;
});

//export const SYM = () => state.count++;
