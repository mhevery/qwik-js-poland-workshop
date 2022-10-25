import {
  component$,
  useClientEffect$,
  useStore,
  QRL,
  useClientEffectQrl,
  $,
  implicit$FirstArg,
  useOn,
  useServerMount$,
} from "@builder.io/qwik";

export function add(a: number, b: number) {
  return a + b;
}

export const addLazy = $(add);

export const step = () => 5;
export default component$(() => {
  const state = useStore(() => ({ count: 123, step: 5 }));
  return (
    <div>
      <Display count={state.count} />
      <Display count={123} />
      <button onClick$={async () => state.count++}>+1</button>
      <button onMouseMove$={() => console.log("counter2")}>+2</button>
      <div style={{ height: "500px" }}>scroll</div>
      <Clock />
      <div style={{ height: "50px" }}>space</div>
      <Clock />
    </div>
  );
});

export const useMyEffect$ = implicit$FirstArg(useMyEffectQrl);
export function useMyEffectQrl(callback: QRL<() => void>) {
  useOn("mousemove", callback);
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
