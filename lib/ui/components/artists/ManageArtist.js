import React from 'react';

import ArtistStore from '../../stores/ArtistStore';
import ArtistActions from '../../actions/ArtistActions';
import ArtistService from '../../services/ArtistService';

class ManageArtist extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._getAppState();
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _getAppState = () => {
    return ArtistStore.getState();
  };

  componentDidMount() {
    ArtistService.getArtistById(this.props.match.params.id);
    ArtistStore.on('change', this.onChange);
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

    ArtistActions.createOrEditArtist(
      {id: this.state.id, name: this.state.name, description: this.state.description, wikipedia: this.state.wikipedia, image: this.state.image}
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="wikipedia">Wikipedia</label>
            <input
              type="text"
              name="wikipedia"
              id="wikipedia"
              className="form-control"
              placeholder="Wiki"
              value={this.state.wikipedia}
              onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              className="form-control"
              placeholder="Image"
              value={this.state.image}
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

export default ManageArtist;
