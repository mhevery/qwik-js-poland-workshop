import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler<unknown> = async ({ request }) => {
  const cookie = request.headers.get("cookie");
  console.log("cookie", cookie);
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
