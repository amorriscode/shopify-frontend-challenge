# Welcome to the Shoppies 🍿

![Demo of my Shopify front-end challenge](https://user-images.githubusercontent.com/16005567/103999903-5fb81600-5152-11eb-9c89-3b18cafc3c2b.gif)

This repo contains my code for the [Shopify 2021 front-end developer internship](https://jobs.smartrecruiters.com/ni/Shopify/ee14b4f1-62ec-4a47-850b-2311c57f855b-front-end-developer-intern-remote-summer-2021).

## Features

- Search OMDB for your favourite movies
- Sorting search results
- Add movies to your nominations list (stored in local storage)
- Dynamic banner to hype you up for the Shoppies
- Display metascore for your nominations

## Get It Running

1. `git clone` to your favourite working directory
2. `yarn` to create a large folder of `node_modules`
3. Copy `.env.example` to `.env.local` and put your [OMDB API key](http://www.omdbapi.com/apikey.aspx) in it
4. `yarn dev` to prepare for the Shoppies

## The Challenge

([View the original challenge](https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#))

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

We'd like a simple to use interface that makes it easy to:

- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

### Technical requirements

1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.

## The Stack

It's a small app built with [Next.js](https://nextjs.org/) and [OMDB](https://www.omdbapi.com).

I chose [Next.js](https://nextjs.org/) because I like using React. [Next.js](https://nextjs.org/) makes it easy to get moving fast while providing a boatload of benefits. I try to spend my time where it'll have the most impact and [Next.js](https://nextjs.org/) helps with that.

Any styling super powers I have are thanks to [Tailwind CSS](https://tailwindcss.com/). I love it, I bet you would too.

## The Developer

My name is Anthony Morris.

I'm an ex-software engineer turned computer science student. I'm doing things a little backwards, but hey, we're all on our own unique journeys, right?

Curious to see more of what I've done? [Visit me at my digital garden](https://anthonymorris.dev)!