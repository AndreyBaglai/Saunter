import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '@googlemaps/js-api-loader';

import { StoreModel } from 'model/store-model';

import styles from './Map.module.css';

type MapPropsType = {
  id: string;
  isEdit: boolean;
  isSetMarkers: boolean;
  path?: any;
};

const Map = ({ id, isEdit, isSetMarkers }: MapPropsType) => {
  const pathInfo = useSelector((state: StoreModel) => state.currentPath);
  const dispatch = useDispatch();

  useEffect(() => {
    let map: google.maps.Map<HTMLElement>;
    let poly: any;

    const loader = new Loader({
      apiKey: `${process.env.REACT_APP_API_KEY}`,
      version: 'weekly',
    });

    loader.load().then(() => {
      const mapContainer = document.getElementById(id) as HTMLElement;

      if (mapContainer) {
        map = new google.maps.Map(mapContainer, {
          center: { lat: 48.450001, lng: 34.983334 },
          zoom: 15,
        });

        poly = new google.maps.Polyline({
          strokeColor: '#9aed00',
          strokeOpacity: 1.0,
          strokeWeight: 3,
        });

        poly.setMap(map);

        // Add a listener for the click event
        isEdit &&
          map.addListener('click', (e: google.maps.MapMouseEvent) => {
            const path = poly.getPath();

            // Because path is an MVCArray, we can simply append a new coordinate
            // and it will automatically appear.
            path.push(e.latLng);

            const dataCoords = poly.getPath().Be || [];
            const coords = dataCoords.map((coord: any) => ({ lat: coord.lat(), lng: coord.lng() }));

            if (dataCoords) {
              dispatch({ type: 'directions/add', payload: coords });
            }

            // Add a new marker at the new plotted point on the polyline.
            new google.maps.Marker({
              position: e.latLng,
              title: '#' + path.getLength(),
              map,
            });
          });

        // Set polyline on map
        !isEdit &&
          pathInfo?.directions &&
          (poly = new google.maps.Polyline({
            path: [
              ...pathInfo?.directions.map((coord: any) => ({
                lat: coord.lat,
                lng: coord.lng,
              })),
            ],
            strokeColor: '#9aed00',
            strokeOpacity: 1.0,
            strokeWeight: 3,
          }));

        poly.setMap(map);

        // Set markers on map
        !isEdit &&
          pathInfo?.directions &&
          pathInfo.directions.forEach((markerCoords: any) => {
            new google.maps.Marker({
              position: {
                lat: markerCoords.lat,
                lng: markerCoords.lng,
              },
              map,
            });
          });
      }
    });
  }, [isEdit, isSetMarkers, pathInfo, id]);

  return <div id={id} className={styles.mapWrapper}></div>;
};

export default Map;
