import React from "react";
import PropTypes from "prop-types";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerList from "./markerList";
import { connect } from "react-redux";
import { Button } from "reactstrap";

export class GoogleMapsComponent extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  }
  // next = 

  render() {
    return (
      <div>
        {this?.state?.location ? (
          <GoogleMap
            zoom={11}
            center={
              this.props?.pharmacies?.length
                ? {
                    lat: this.props.pharmacies[0].lat,
                    lng: this.props.pharmacies[0].lng
                  }
                : this.state.location
            }
          >
            {<MarkerList />}
          </GoogleMap>
        ) : (
          <h1 style={{ width: "80%", margin: "auto 40%" }}>we can't find it</h1>
        )}
        <span>
          {" "}
          <Button color='primary'>
            -
          </Button>
          <Button color='primary'>
            +
          </Button>
        </span>
      </div>
    );
  }
}

GoogleMapsComponent.propTypes = {
  pharmacies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  pharmacies: state.pharmacies
});

export default connect(
  mapStateToProps,
  {}
)((GoogleMapsComponent = withScriptjs(withGoogleMap(GoogleMapsComponent))));
