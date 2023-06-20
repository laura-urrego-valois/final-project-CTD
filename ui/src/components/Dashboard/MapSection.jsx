import { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './Map.css';

export const countries = [
  {
    "id": 3,
    "countryName": "Brasil",
    "capitalName": null,
    "latitude": -15.78,
    "longitude": -47.93
  },
  {
    "id": 6,
    "countryName": "EE. UU.",
    "capitalName": null,
    "latitude": 38.91,
    "longitude": -77.04
  },
  {
    "id": 12,
    "countryName": "Inglaterra",
    "capitalName": null,
    "latitude": 33.68,
    "longitude": 73.05
  },
  {
    "id": 15,
    "countryName": "México",
    "capitalName": null,
    "latitude": 80,
    "longitude": 90
  },
  {
    "id": 10,
    "countryName": "Italia",
    "capitalName": null,
    "latitude": 19.43,
    "longitude": -99.13
  },
  {
    "id": 14,
    "countryName": "Pakistan",
    "capitalName": null,
    "latitude": 33.64,
    "longitude": 73.04
  },
  {
    "id": 9,
    "countryName": "Suiza",
    "capitalName": null,
    "latitude": 41.9,
    "longitude": 12.5
  },
  {
    "id": 1,
    "countryName": "Australia",
    "capitalName": null,
    "latitude": -35.28,
    "longitude": 149.13
  },
  {
    "id": 5,
    "countryName": "Georgia",
    "capitalName": null,
    "latitude": 41.72,
    "longitude": 44.83
  },
  {
    "id": 4,
    "countryName": "Polinesia Francesa",
    "capitalName": null,
    "latitude": -17.53,
    "longitude": -149.57
  },
  {
    "id": 2,
    "countryName": "PAISES BAJOS",
    "capitalName": null,
    "latitude": 52.37,
    "longitude": 4.89
  },
  {
    "id": 8,
    "countryName": "Francia",
    "capitalName": null,
    "latitude": 46.95,
    "longitude": 7.45
  },
  {
    "id": 11,
    "countryName": "México",
    "capitalName": null,
    "latitude": 51.51,
    "longitude": -0.13
  }
]
export const MapSection = () => {
  useEffect(() => {
    const mapContainer = L.DomUtil.get('map');
    if (mapContainer != null) {
      mapContainer._leaflet_id = null;
    }

    const map = L.map('map').setView([0, 0], 1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    countries.forEach((country) => {
      const { latitude, longitude } = country;
      if (latitude !== null && longitude !== null) {
        L.marker([latitude, longitude]).addTo(map);
      }
    });

    return () => {
      map.remove();
    };
  }, [countries]);

  return <div id="map" className="map-container"></div>;
};
