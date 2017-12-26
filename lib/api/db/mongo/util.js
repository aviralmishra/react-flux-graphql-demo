import map from 'lodash.map';
import groupBy from 'lodash.groupBy';
import humps from 'humps';

module.exports = {
  orderedFor: (rows, field, singleObject) => {
    const collection = map(rows, field);
    const data = humps.camelizeKeys(rows);
    const inGroupsOfField = groupBy(data, field);

    return collection.map(element => {
      const elementArray = inGroupsOfField[element];
      if (elementArray) {
        return singleObject
          ? elementArray[0]
          : elementArray;
      }
      return singleObject
        ? {}
        : [];
    });
  },

  slug: str => {
    return str.toLowerCase().replace(/[\s\W-]+/, '-');
  }
};
