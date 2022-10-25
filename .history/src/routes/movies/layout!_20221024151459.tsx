import { component$, Slot } from "@builder.io/qwik";

export const onRequest: RequestHandler<unknown> = async () => {};

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  );
});
