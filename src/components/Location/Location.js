import React from 'react';
import './Location.scss';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'


const location = props => {
    const Map = () => {
        return (
            <GoogleMap defaultZoom={10} defaultCenter={{lat: 30.044420, lng: 31.235712}} />
        );
    };

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <div className="location">
        <h1>go to store from <span>your home</span></h1>
        <div className="location__drop">
            <DropdownButton id="dropdown-basic-button" title="Brand">
                <Dropdown.Item href="#/action-1">Levi's</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Adidas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Timberland</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Reebook</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Country">
                <Dropdown.Item href="#/action-1">Cairo</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Alexandria</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Giza</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Location">
                <Dropdown.Item href="#/action-1">Tahrir</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Zamalek</Dropdown.Item>
                <Dropdown.Item href="#/action-3">EL Nozha</Dropdown.Item>
            </DropdownButton>
        </div>
        <div className="location__map">
            <WrappedMap  
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCJ-p9KDnnX84AfArSRco-eGLmzgsa_RgQ`}
                loadingElement={<div style={{height: "100%"}} />}
                containerElement={<div style={{height: "100%"}} />}
                mapElement={<div style={{height: "100%"}} />}
                 />
        </div>
    </div>
    );

};

export default location;