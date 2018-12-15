import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as UserActions } from '../../redux/store/ducks/users';

import MapboxConfig from '../../config/Mapbox';

import UserAddModal from '../../components/UserAddModal/index';
import UserList from '../../components/UserList/index';

import { AvatarMarker } from './style';

import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -10.312471,
      longitude: -48.313594,
      zoom: 14,
    },
    showUserAddModal: false,
    latitude: 0,
    longitude: 0,
  };

  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        avatar_url: PropTypes.url,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    ).isRequired,
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState(prevState => ({
      viewport: {
        ...prevState.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    }));
  };

  showModal = () => {
    this.setState({ showUserAddModal: true });
  };

  hideModal = () => {
    this.setState({ showUserAddModal: false });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;

    this.setState({ latitude, longitude });

    this.showModal();
  };

  render() {
    return (
      <Fragment>
        <UserAddModal
          show={this.state.showUserAddModal}
          handleClose={this.hideModal}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        <UserList />
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={MapboxConfig.AccessToken}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.props.users.length
            ? this.props.users.map(user => (
              <Marker
                key={user.id}
                latitude={user.latitude}
                longitude={user.longitude}
                onClick={this.handleMapClick}
                captureClick={true}
              >
                <AvatarMarker alt="Avatar" src={user.avatar_url} />
              </Marker>
            ))
            : null}
        </MapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
