import { component$, Resource } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { Tmdb } from "tmdb-ts-api";
import { PopularMovies, Result } from "tmdb-ts-api/dist/movie/popular";

const tmdb = new Tmdb({ apiKey: "73e6f6e34b28a4c3be0f745176c8225b" });

export const onGet: RequestHandler<PopularMovies> = async () => {
  console.log("get popular movies");
  return await tmdb.movies.getPopular();
};

export default component$(() => {
  const popularMoviesResource = useEndpoint<PopularMovies>();
  return (
    <div>
      <Resource
        value={popularMoviesResource}
        onPending={() => <div>Loading...</div>}
        onResolved={(popularMovies) => (
          <pre>{JSON.stringify(popularMovies)}</pre>
        )}
      />
    </div>
  );
});

export const MoviePoster = component$((props: { movie: Result }) => {
  return <div>{JSON.stringify(props.movie)}</div>;
});
