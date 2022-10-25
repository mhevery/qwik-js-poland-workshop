import { component$, useClientEffect$, useStore, $ } from "@builder.io/qwik";

export const step = () => 5;
export default component$(() => {
  const state = useStore({ count: 123, step: 5 });
  useMyEffect$(() => console.log());
  return (
    <>
      <Display count={state.count} />
      <Display count={123} />
      <button onClick$={async () => state.count++}>+1</button>
      <button onMouseMove$={() => console.log("counter2")}>+2</button>
      <div style={{ height: "500px" }}>scroll</div>
      <Clock />
      <div style={{ height: "50px" }}>space</div>
      <Clock />
    </>
  );
});

export function useMyEffect$(callback: () => void) {
  useClientEffect$(callback);
}

export const Display = component$((props: { count: number }) => {
  return <div>{props.count}</div>;
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
