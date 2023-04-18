/** @type {import('next').NextConfig} */

// const API_KEY = "a69f4da1b285b37e02bb3fb12539afd3";
const API_KEY = process.env.API_KEY;


const nextConfig = {
  reactStrictMode: true,
  //  redirect는 user가 url 바뀐걸 알 수 있다.
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      }
    ];
  },
  // rewrite는 user를 redirect 시키지만 url은 변하지 않는다.
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=en-US&page=1`
      }
    ]
  }
}

module.exports = nextConfig
