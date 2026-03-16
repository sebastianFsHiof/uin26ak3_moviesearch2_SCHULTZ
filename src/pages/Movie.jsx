import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovie } from "../services/omdb.jsx"
import { slugToTitle } from "../utils/slug.jsx"

export default function Movie() {

  const { movie } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {

    async function load() {
      const title = slugToTitle(movie)
      const result = await getMovie(title)
      setData(result)
    }

    load()

  }, [movie])

  if (!data) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    )
  }

  return (
    <main>

      <header>
        <h1>{data.Title}</h1>
      </header>

      <nav>
        <Link to="/">Back</Link>
      </nav>

      <section>

        {data.Poster !== "N/A"
          ? <img src={data.Poster} alt={data.Title}/>
          : <p>No poster</p>
        }

        <p>{data.Plot}</p>
        <p>{data.Year}</p>

      </section>

    </main>
  )
}