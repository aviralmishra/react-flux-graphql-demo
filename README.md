# react-flux-graphql-demo

React and Flux based data-driven application built with GraphQL

## Pre Reqs

[PM2](https://www.npmjs.com/package/pm2)

```
npm install pm2 -g
```

## Installation

```
git clone git@github.com:aviralmishra/react-flux-graphql-demo.git

npm install
```

## Dev Server Run

```
npm run dev
```

## Dev Web Run & Watch

```
npm run webpack
```

## Test

```
npm run test
```

## Test Coverage

```
npm run verify-tests
```

## Prod Build

```
npm run build-webpack
npm run build-node
```

## Prod Run

```
npm run start-prod
```

## Links

1. [Atom Editor Cheat Sheet](https://gist.github.com/chrissimpkins/5bf5686bae86b8129bee#atom_search)
2. [Bootstrap](http://getbootstrap.com/docs/3.3/css/)
3. [JavaScript Style Guide](https://github.com/airbnb/javascript)
4. [Webpack](https://github.com/webpack/docs/wiki/configuration)
5. [MongoDB Driver API](http://mongodb.github.io/node-mongodb-native/3.0/api/)
6. [Bootstrap SASS](https://github.com/twbs/bootstrap-sass)
7. [Bootstrap Components](http://getbootstrap.com/docs/3.3/components/)
8. [SASS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

## To Do

1. Form validations
2. Automated tests
3. Production build and run

## Sample GraphQL Queries

Once the application is running, visit <http://localhost:8080/graphql> to execute GraphQL queries. Listed below are some things you can run.

Note: These will require that the MongoDB collections are setup and accessible.

```
query {
  albums {
    title,
    released
  },
  artists {
    name
    wikipedia
  }
}
```

```
query {
  album(id: "album-1001") {
    id
    title
    released
    art
    artistId
    description
  }
}
```

```
mutation CreateAlbum($input: AlbumInput!) {
  createAlbum(input: $input) {
    id
    title
    released
    art
    artistId
    description
  }
}

{
  "input": {
    "id": "album-1005",
    "title": "Continuum",
    "released": "2006-09-12",
    "art": "https://en.wikipedia.org/wiki/Continuum_(John_Mayer_album)#/media/File:Continuum_(album).png",
    "artistId": "artist-1002",
    "description": "Continuum is the third studio album by American musician John Mayer. The album debuted at number 2 on the US Billboard 200 chart, selling 300,186 copies in its first week."
  }
}
```

```
mutation {
  createAlbum(input: {
    id: "album-1006",
    title: "Continuum",
    released: "2006-09-12",
    art: "https://en.wikipedia.org/wiki/Continuum_(John_Mayer_album)#/media/File:Continuum_(album).png",
    artistId: "artist-1002",
    description: "Continuum is the third studio album by American musician John Mayer. The album debuted at number 2 on the US Billboard 200 chart, selling 300,186 copies in its first week."

}) {
    id
    title
    released
    art
    artistId
    description
  }
}
```

```
mutation {
  createArtist(input: {id: "artist-1006", name: "Cliff Richard"}) {
    id
    name
    description
  }
}
```
