import React, { Component } from 'react';

import {
    GoogleMap,
    withGoogleMap,
    withScriptjs
  } from "react-google-maps"; 

import factory from './factory.png'
import store from './store.png'

import CustomMarker from './customMarker'
const MapStyleDark = require('./mapstyle.json');

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

const markers = [
    {
      "id":"HJR-1710-83",
      "position": {
        "lat": 56.653,
        "lng": -112.222
      },
      "type": store
    },
    {
      "id":"SRH-1704-14",
      "position": {
        "lat": 44.501,
        "lng": 129.514
      },
      "type": store
    },
    {
      "id":"SLM-1206-15",
      "position": {
        "lat": 43.709,
        "lng": -1.245
      },
      "type": factory
    },
    {
      "id":"ATF-0509-83",
        "position": {
          "lat": 49.122,
          "lng": 6.469
        },
        "type": factory
      },
      {
        "id":"SRN-2609-17",
        "position": {
          "lat": 54.221,
          "lng": 9.701
        },
        "type": factory
      },
      {
        "id":"BDF-1423-35",
        "position": {
          "lat": 33.588,
          "lng": -86.858
        },
        "type": factory
      },
      {
        "id":"NHG-9834-32",
        "position": {
          "lat": 38.711,
          "lng": -82.638
        },
        "type": factory
      },
      {
        "id":"MTU-3030-07",
        "position": {
          "lat": 36.972,
          "lng": 9.691
        },
        "type": factory
      }];

  const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 40.7484445, // latitude for the center of the map
                          lng: -73.9878584 // longitude for the center of the map
                      }}

        defaultOptions={{ 
          styles: MapStyleDark,
          disableDefaultUI: true, // disable default map UI
          draggable: true, // make map draggable
          keyboardShortcuts: false, // disable keyboard shortcuts
          scaleControl: true, // allow scale controle
          scrollwheel: true // allow scroll wheel
       }}
      >
          {markers.map((mark,i) => {
              return(
                  <CustomMarker key={uuidv4()} id={mark.id} position={{lat: mark.position.lat, lng: mark.position.lng}} 
                  icon = {{
                      url: mark.type,
                      anchor: new google.maps.Point(1,1),
                      scaledSize: new google.maps.Size(50,50)
                  }}></CustomMarker>
              )
          })};
          </GoogleMap>
    ))
  );

  
  export default class CustomGMap extends Component {
   
    constructor(props) {
        super(props);
      }

    render() {

        const {
            props: {}
              } = this;


        return (
                <MyMapComponent
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB6PoOt3MgxIT5ORCqCk6HDuRj4ChE4h2Y"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `calc(100vh - 10px)` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
        )
    }
}