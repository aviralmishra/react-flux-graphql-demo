const {orderedFor} = require('./util');

module.exports = db => {
  return {
    getAllAlbums() {
      return db.collection('albums').find({}).toArray().then(rows => {
        return orderedFor(rows, 'title', true);
      });
    },
    getAlbumById(id) {
      return db.collection('albums').find({'id': id}).toArray().then(rows => {
        return rows[0];
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
    editAlbum(album) {
      return db.collection('albums').updateOne({
        id: album.id
      }, {
        $set: {
          title: album.title,
          released: album.released,
          art: album.art,
          artistId: album.artistId,
          description: album.description,
          modifiedAt: Date.now()
        }
      }, {upsert: false}).then(res => {
        console.info('Updated records count:', res.modifiedCount);
        return album;
      });
    },
    getAllArtists() {
      return db.collection('artists').find({}).toArray().then(rows => {
        return orderedFor(rows, 'name', true);
      });
    },
    getArtistById(id) {
      return db.collection('artists').find({'id': id}).toArray().then(rows => {
        return rows[0];
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
    },
    editArtist(artist) {
      return db.collection('artists').updateOne({
        id: artist.id
      }, {
        $set: {
          name: artist.name,
          description: artist.description,
          wikipedia: artist.wikipedia,
          image: artist.image,
          modifiedAt: Date.now()
        }
      }, {upsert: false}).then(res => {
        console.info('Updated records count:', res.modifiedCount);
        return artist;
      });
    }
  };
};
