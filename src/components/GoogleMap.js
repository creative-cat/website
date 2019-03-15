import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { MapPin } from 'react-feather'

let mapkey = 'AIzaSyDGg0wxgml8SX5tmySl3OwMWNzfgQy3H74'
if (process.env.NETLIFY_MAP_KEY) {
  mapkey = process.env.NETLIFY_MAP_KEY
}

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.296972,
      lng: -111.694604
    },
    zoom: 11
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={40.296972} lng={-111.694604} text={'Orem'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap

const Marker = () => {
  return (
    <div style={{ color: 'red' }}>
      <MapPin />
    </div>
  )
}
