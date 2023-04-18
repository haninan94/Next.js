import { useState, useEffect } from "react";
import Seo from "components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

// const API_KEY = "a69f4da1b285b37e02bb3fb12539afd3";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`)
  }
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (
  //       await fetch(
  //         `/api/movies`
  //       )
  //     ).json();
  //     setMovies(results)
  //   })();
  // }, []);

  return (
    <>
      <div className="container">

        <Seo title="Home" />
        {/* {!movies && <h4>Loading...</h4>} */}
        {results?.map(movie => (
          <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>
              <Link legacyBehavior href={`/movies/${movie.original_title}/${movie.id}`} >
                <a>
                  {movie.original_title}
                </a>
              </Link>
            </h4>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 30px;
        }
        .movie{
          cursor:pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

// 아래 함수의 이름은 바꿀 수 없다!
// 아래 함수는 server side 에서만 실행된다.
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    }
  }
}
