const {orderedFor} = require('./util');

module.exports = db => {
  return {
    getAllAlbums() {
      return db.collection('albums').find({}).toArray().then(rows => {
        return orderedFor(rows, 'title', true);
      });
    },
    getAllArtists() {
      return db.collection('artists').find({}).toArray().then(rows => {
        return orderedFor(rows, 'name', true);
      });
    },
    createAlbum(album) {
      return db.collection('albums').insertOne({
        id: album.id,
        title: album.title,
        released: album.released,
        art: album.art,
        artistId: album.artistId,
        description: album.description,
        createdAt: Date.now()
      }).then(res => {
        return res.ops[0];
      });
    },
    createArtist(artist) {
      return db.collection('artists').insertOne({
        id: artist.id,
        name: artist.name,
        description: artist.description,
        wikipedia: artist.wikipedia,
        image: artist.image,
        createdAt: Date.now()
      }).then(res => {
        return res.ops[0];
      });
    }
  };
};
