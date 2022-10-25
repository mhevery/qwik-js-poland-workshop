import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <button onChange$={() => console.log("abc")}>+1</button>
    </>
  );
});
