import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import MapboxConfig from '../../config/Mapbox';

import UserAddModal from '../../components/UserAddModal/index';

import 'mapbox-gl/dist/mapbox-gl.css';

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    showUserAddModal: false,
    latitude: 0,
    longitude: 0,
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
    const [latitude, longitude] = e.lngLat;

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
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={MapboxConfig.AccessToken}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker
            latitude={-23.5439948}
            longitude={-46.6065452}
            onClick={this.handleMapClick}
            captureClick={true}
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              alt="Avatar"
              src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            />
          </Marker>
        </MapGL>
      </Fragment>
    );
  }
}
