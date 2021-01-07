import Head from 'next/head'

import MovieSearch from '../components/MovieSearch'
import Nominations from '../components/Nominations'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center relative pb-10">
      <Head>
        <title>The Shoppies</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍿</text></svg>"
        />
      </Head>

      <main className="container mx-auto space-y-8 p-8">
        <h1 className="text-brand-red text-6xl font-bold text-center">
          The Shoppies 🍿
        </h1>

        <h2 className="text-white text-2xl font-bold text-center">
          Nominate your favourite movies!
        </h2>

        <MovieSearch />
      </main>

      <Nominations />

      <footer className="absolute bottom-0 w-full text-center text-white h-2 py-10">
        Made with 🍿 by{' '}
        <a
          target="_blank"
          className="text-brand-red hover:text-brand-red-dark font-bold"
          href="https://anthonymorris.dev"
        >
          Anthony Morris
        </a>
      </footer>
    </div>
  )
}
