import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect } from 'react';

import styles from './Map.module.css';

type MapPropsType = {
  id: string;
  isEdit: boolean;
  onSetCoordinates?: (data: any) => void;
};

export default function Map({ id, isEdit, onSetCoordinates = () => {} }: MapPropsType) {
  useEffect(() => {
    let map: any;
    let poly: any;

    // `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=40.659569%2C-73.933783&origins=40.6655101%2C-73.89188969999998&key=${REACT_APP_API_KEY}`

    const loader = new Loader({
      apiKey: `${process.env.REACT_APP_API_KEY}`,
      version: 'weekly',
    });

    loader
      .load()
      // .then(() => {
      //   let coords = {};
      //   const success = (position: any) => {
      //     const { latitude, longitude } = position.coords;
      //     coords = { lat: latitude, lng: longitude };
      //   };

      //   navigator.geolocation.getCurrentPosition(success);
      //   return coords;
      // })
      .then(() => {
        const mapEl = document.getElementById(id) as HTMLElement;
        if (mapEl) {
          map = new google.maps.Map(mapEl, {
            center: { lat: 48.450001, lng: 34.983334 },
            zoom: 15,
          });

          poly = new google.maps.Polyline({
            strokeColor: '#9aed00',
            strokeOpacity: 1.0,
            strokeWeight: 3,
          });
          poly.setMap(map);

          const addMarker = (e: google.maps.MapMouseEvent) => {
            const path = poly.getPath();

            // Because path is an MVCArray, we can simply append a new coordinate
            // and it will automatically appear.
            path.push(e.latLng);

            const dataCoords = poly.getPath().Be || [];

            if (dataCoords && dataCoords.length > 1) {
              onSetCoordinates([...dataCoords]);
            }
           
            console.dir(poly.getPath().Be);

            // Add a new marker at the new plotted point on the polyline.
            new google.maps.Marker({
              position: e.latLng,
              title: '#' + path.getLength(),
              map: map,
            });
          };

          // Add a listener for the click event
          isEdit && map.addListener('click', addMarker);
        }
      });
  }, []);

  return <div id={id} className={styles.mapWrapper}></div>;
}
