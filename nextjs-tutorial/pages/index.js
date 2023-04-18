import { useState, useEffect } from "react";
import Seo from "components/Seo";

const API_KEY = "a69f4da1b285b37e02bb3fb12539afd3";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
      ).json();
      console.log(data);
    })();
  }, []);

  return (
    <>
      <Seo title="Home" />
      <h1>this is Home.</h1>
    </>
  );
}
