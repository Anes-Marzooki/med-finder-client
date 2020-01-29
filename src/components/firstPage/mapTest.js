import React, { Component } from "react";
import { Card, CardHeader, CardBody, NavLink } from "reactstrap";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

//////////////////////////// my work

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   async componentDidMount() {
//     await navigator.geolocation.getCurrentPosition(position => {
//       this.setState({
//         center: {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         },
//         zoom: 11
//       });
//     });

// // Important! Always set the container height explicitly
// this.state?.center && this.state?.zoom ? (
//   <div style={{ height: "70vh", width: "80%", margin: "auto" }}>
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
//       defaultCenter={this.state.center}
//       defaultZoom={this.state.zoom}
//     >
//       <AnyReactComponent
//         lat={this.state.center.lat}
//         lng={this.state.center.lng}
//         text="where you are"
//       />
//     </GoogleMapReact>
//   </div>
// ) : (
//   <h1 style={{ width: "80%", margin: "auto 40%" }}>
//     we can't find it
//     <span role="img" aria-label="cry">
//       😢
//     </span>
//   </h1>
// )

//////////////////////////// not me i swear

// To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app

const defaultZoom = 11;
const defaultCenter = { lat: 37.431489, lng: -122.163719 };
const locations = [
  {
    lat: 37.431489,
    lng: -122.163719,
    label: "S",
    draggable: false,
    title: "Hopitale Militaire"
    // www: 'https://www.stanford.edu/'
  },
  {
    lat: 37.394694,
    lng: -122.150333,
    label: "T",
    draggable: false,
    title: "Hopitale Fatouma Bourguiba"
    // www: 'https://www.tesla.com/'
  },
  {
    lat: 37.331681,
    lng: -122.0301,
    label: "A",
    draggable: false,
    title: "Pharmacy Ghazela"
    // www: 'https://www.apple.com/'
  },
  {
    lat: 37.484722,
    lng: -122.148333,
    label: "F",
    draggable: false,
    title: "Pharmacy Ghazela"
    // www: 'https://www.facebook.com/'
  }
];

class MarkerList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return locations.map((location, index) => {
      return (
        <MarkerWithInfoWindow key={index.toString()} location={location} />
      );
    });
  }
}

class MarkerWithInfoWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { location } = this.props;

    return (
      <Marker
        onClick={this.toggle}
        position={location}
        title={location.title}
        label={location.label}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.toggle}>
            <NavLink href={location.www} target="_blank">
              {location.title}
            </NavLink>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

const GoogleMapsComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
        {<MarkerList locations={locations} />}
      </GoogleMap>
    );
  })
);

class ReactGoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="animated fadeIn"
        style={{ height: "75vh", width: "80%", margin: "auto" }}
      >
        <Card>
          <CardHeader style={{ textAlign: "center" }}>
            <i className="icon-map"> Find your medicine on map </i>{" "}
            {/* <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a> */}
            {/* <div className="card-header-actions">
            <a href="https://github.com/tomchentw/react-google-maps" rel="noreferrer noopener" target="_blank" className="card-header-action">
              <small className="text-muted">docs</small>
            </a>
          </div> */}
          </CardHeader>
          <CardBody>
            <GoogleMapsComponent
              key="map"
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ReactGoogleMaps;
