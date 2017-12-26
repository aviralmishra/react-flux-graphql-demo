import config from './config';
console.info(`Currently in ${config.nodeEnv} mode...`);

import express from 'express';

import mongoConfig from './db/mongo/mongoConfig';
import mongoDataHelper from './db/mongo/mongoDataHelper';
import {MongoClient} from 'mongodb';

import Schema from './db/graphql/Schema';
import GraphQLHTTP from 'express-graphql';

import assert from 'assert';

const app = express();
app.use(express.static('public'));

MongoClient.connect(mongoConfig[config.nodeEnv].url, (err, client) => {
  assert.equal(err, null);

  let db = client.db('react_flux_graphql_db');
  const dbHelper = mongoDataHelper(db);

  app.use('/graphql', GraphQLHTTP({
    schema: Schema(dbHelper),
    graphiql: true,
    context: {
      dbHelper: dbHelper
    }
  }));

  const PORT = config.port || 8080;
  app.listen(PORT, () => {
    console.info(`Server is listening on port ${config.port}`);
  });
});
