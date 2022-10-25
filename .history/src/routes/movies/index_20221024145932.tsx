import { component$, Resource, useStylesScoped$ } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { Tmdb } from "tmdb-ts-api";
import { PopularMovies, Result } from "tmdb-ts-api/dist/movie/popular";
import GRID_CSS from "./grid.css?inline";
import POSTER_CSS from "./poster.css?inline";

const tmdb = new Tmdb({ apiKey: "73e6f6e34b28a4c3be0f745176c8225b" });

export const onGet: RequestHandler<PopularMovies> = async () => {
  console.log("get popular movies");
  return {
    popular: await tmdb.movies.getPopular(),
    genre: await tmdb.genres.getMovieList(),
  };
};

export default component$(() => {
  useStylesScoped$(GRID_CSS);
  const popularMoviesResource = useEndpoint<PopularMovies>();
  return (
    <div class="grid">
      <Resource
        value={popularMoviesResource}
        onPending={() => <div>Loading...</div>}
        onResolved={(popularMovies) => (
          <>
            {popularMovies.results.map((movie) => (
              <MoviePoster movie={movie} />
            ))}
          </>
        )}
      />
    </div>
  );
});

export const MoviePoster = component$((props: { movie: Result }) => {
  useStylesScoped$(POSTER_CSS);
  const rating = props.movie.vote_average;
  return (
    <div class="poster">
      <div class="title">{props.movie.title}</div>
      <div>{props.movie.genre_ids.join(",")}</div>
      <div>
        <img
          src={"https://image.tmdb.org/t/p/w342/" + props.movie.poster_path}
        />
      </div>
      <div class="rating">
        <div class="bar" onClick$={() => console.log(rating)}>
          <div
            class="front"
            style={{ width: props.movie.vote_average / 2 + "em" }}
          >
            ★★★★★
          </div>
          <div class="back">★★★★★</div>
        </div>
      </div>
    </div>
  );
});
