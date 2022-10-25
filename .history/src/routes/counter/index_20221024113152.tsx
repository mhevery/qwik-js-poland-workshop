import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({ count: 123 });
  return (
    <>
      <span>{state.count}</span>
      {/* <button onClick$={() => state.count++}>+1</button>
      <button onMouseMove$={() => console.log("counter2")}>+2</button> */}
    </>
  );
});

//export const SYM = () => state.count++;
