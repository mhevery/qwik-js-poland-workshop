import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import { Tmdb } from "tmdb-ts-api";
import { PopularMovies } from "tmdb-ts-api/dist/movie/popular";

const tmdb = new Tmdb({ apiKey: "73e6f6e34b28a4c3be0f745176c8225b" });

export const onGet: RequestHandler<PopularMovies> = () => {
  console.log("onGet");
  return {};
};

export default component$(() => {
  return <div>Hello World!</div>;
});
