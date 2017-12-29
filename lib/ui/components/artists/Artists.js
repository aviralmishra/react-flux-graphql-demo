import React from 'react';
import {Link} from 'react-router-dom';

import DataLoaderService from '../../services/DataLoaderService';
import ArtistsStore from '../../stores/ArtistsStore';

class Artists extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._getAppState();
    this.onChange = this.onChange.bind(this);
  }

  _getAppState = () => {
    return {artists: ArtistsStore.getAll()};
  };

  componentDidMount() {
    DataLoaderService.loadArtists();
    ArtistsStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    ArtistsStore.removeListener('change', this.onChange);
  }

  onChange() {
    this.setState(this._getAppState());
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <span className="glyphicon glyphicon-tasks" aria-hidden="true"></span>
                  </th>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.artists.map((artist) => {
                    return <tr key={artist.id}>
                      <td className="col-sm-1">
                        <Link to={`/artists/${artist.id}`}>
                          <span className="glyphicon glyphicon-edit right-padding" aria-hidden="true"></span>
                        </Link>
                        <Link to={artist.wikipedia} target="_blank">
                          <span className="glyphicon glyphicon-globe" aria-hidden="true"></span>
                        </Link>
                      </td>
                      <td className="col-sm-3">{artist.name}</td>
                      <td className="col-sm-8 text-justify">{artist.description}</td>
                    </tr>;
                  })
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}

export default Artists;
