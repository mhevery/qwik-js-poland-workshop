import { component$, useClientEffect$, useStore, $ } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({ count: 123, step: 5 });
  const step = $(() => state.step);
  return (
    <>
      <span>{state.count}</span>
      <button onClick$={async () => (state.count += await step())}>+1</button>
      <button onMouseMove$={() => console.log("counter2")}>+2</button>
      <div style={{ height: "500px" }}>scroll</div>
      <Clock />
      <div style={{ height: "50px" }}>space</div>
      <Clock />
    </>
  );
});

export const Clock = component$(() => {
  const state = useStore({ time: "" });
  useClientEffect$(() => {
    const update = () => {
      state.time = new Date().toLocaleTimeString();
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  });
  return <div>{state.time.toUpperCase()}</div>;
});

//export const SYM = () => state.count++;
