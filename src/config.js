import {FlyToInterpolator} from 'react-map-gl';

export const INITIAL_VIEWPORT = {
  latitude: 41.4,
  longitude: 2.2,
  zoom: 5,
  bearing: 0,
  pitch: 0,
  transitionDuration: 1000,
  transitionInterpolator: new FlyToInterpolator(),
};

export const WIDESCREEN_STEP = '770px';
export const DRAWER_WIDTH = '300px';

export const LOCALSTORAGE_ENTRY = 'geomatico.mapbox-style-live-editor.style';
