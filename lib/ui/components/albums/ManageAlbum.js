import React from 'react';

import AlbumStore from '../../stores/AlbumStore';
import AlbumActions from '../../actions/AlbumActions';
import AlbumService from '../../services/AlbumService';

class ManageAlbum extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._getAppState();
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _getAppState = () => {
    return AlbumStore.getState();
  };

  componentDidMount() {
    AlbumService.getAlbumById(this.props.match.params.id);
    AlbumStore.on('change', this.onChange);
  }

  onChange() {
    this.setState(this._getAppState());
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    AlbumActions.createOrEditAlbum({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      released: this.state.released,
      art: this.state.art,
      artistId: this.state.artistId
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="released">Release Date</label>
            <input
              type="text"
              name="released"
              id="released"
              className="form-control"
              placeholder="Release Date"
              value={this.state.released}
              onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="art">Album Art</label>
            <input
              type="text"
              name="art"
              id="art"
              className="form-control"
              placeholder="Album Art"
              value={this.state.art}
              onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="art">Artist</label>
            <input
              type="text"
              name="artistId"
              id="artistId"
              className="form-control"
              placeholder="Artist Id"
              value={this.state.artistId}
              onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows="3"
              className="form-control"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}/>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ManageAlbum;
