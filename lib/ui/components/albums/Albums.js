import React from 'react';
import {Link} from 'react-router-dom';

import moment from 'moment';

import DataLoaderService from '../../services/DataLoaderService';
import AlbumListStore from '../../stores/AlbumListStore';

class Albums extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._getAppState();
    this.onChange = this.onChange.bind(this);
  }

  _getAppState = () => {
    return AlbumListStore.getState();
  };

  componentDidMount() {
    DataLoaderService.loadAlbums();
    AlbumListStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    AlbumListStore.removeListener('change', this.onChange);
  }

  onChange() {
    this.setState(this._getAppState());
  }

  dateLabel = (dateValue) => {
    return moment(dateValue).format('ll');
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <span className="glyphicon glyphicon-tasks" aria-hidden="true"></span>
                  </th>
                  <th>Title</th>
                  <th>Released</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.albums.map((album) => {
                    return <tr key={album.id}>
                      <td className="col-sm-1">
                        <Link to={`/albums/${album.id}`}>
                          <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                        </Link>
                      </td>
                      <td className="col-sm-2">{album.title}</td>
                      <td className="col-sm-2">{this.dateLabel(album.released)}</td>
                      <td className="col-sm-7 text-justify">{album.description}</td>
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

export default Albums;
