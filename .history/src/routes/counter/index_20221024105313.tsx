import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <button onChange$={() => console.log("counter")}>+1</button>
    </>
  );
});
