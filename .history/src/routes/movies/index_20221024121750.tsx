import { component$ } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { Tmdb } from "tmdb-ts-api";
import { PopularMovies } from "tmdb-ts-api/dist/movie/popular";

const tmdb = new Tmdb({ apiKey: "73e6f6e34b28a4c3be0f745176c8225b" });

export const onGet: RequestHandler<PopularMovies> = async () => {
  console.log("get popular movies");
  return await tmdb.movies.getPopular();
};

export default component$(() => {
  const popularMovies = useEndpoint<PopularMovies>();
  return <div>Hello World!</div>;
});
