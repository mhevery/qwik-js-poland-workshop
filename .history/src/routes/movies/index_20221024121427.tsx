import { component$ } from "@builder.io/qwik";

const tmdb = new Tmdb({ apiKey: "73e6f6e34b28a4c3be0f745176c8225b" });

export default component$(() => {
  return <div>Hello World!</div>;
});
