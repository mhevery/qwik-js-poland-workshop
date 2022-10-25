import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler<unknown> = async ({request}) => {
   console.log(request.headers.)
};

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  );
});
