import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect } from 'react';
import CustomButton from '../Button/CustomButton';

import styles from './Map.module.css';

type MapPropsType = {
  id: string;
  isEdit: boolean;
  markers: boolean;
  onSetCoordinates?: (data: any) => void;
};

export default function Map({ id, isEdit, markers, onSetCoordinates = () => {} }: MapPropsType) {
  useEffect(() => {
    let map: any;
    let poly: any;

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

            if (dataCoords) {
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
  }, [isEdit, markers]);

  return (
    <>
      <div id={id} className={styles.mapWrapper}></div>
     
    </>
  );
}
