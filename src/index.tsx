import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// function initMap(): void {
//   const directionsService = new google.maps.DirectionsService();
//   const directionsRenderer = new google.maps.DirectionsRenderer();
//   const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 7,
//       center: { lat: 41.85, lng: -87.65 },
//     }
//   );
//   directionsRenderer.setMap(map);

//   const onChangeHandler = function () {
//     calculateAndDisplayRoute(directionsService, directionsRenderer);
//   };
//   (document.getElementById("start") as HTMLElement).addEventListener(
//     "change",
//     onChangeHandler
//   );
//   (document.getElementById("end") as HTMLElement).addEventListener(
//     "change",
//     onChangeHandler
//   );
// }

// function calculateAndDisplayRoute(
//   directionsService: google.maps.DirectionsService,
//   directionsRenderer: google.maps.DirectionsRenderer
// ) {
//   directionsService
//     .route({
//       origin: {
//         query: (document.getElementById("start") as HTMLInputElement).value,
//       },
//       destination: {
//         query: (document.getElementById("end") as HTMLInputElement).value,
//       },
//       travelMode: google.maps.TravelMode.DRIVING,
//     })
//     .then((response) => {
//       directionsRenderer.setDirections(response);
//     })
//     .catch((e) => window.alert("Directions request failed due to " + status));
// }
