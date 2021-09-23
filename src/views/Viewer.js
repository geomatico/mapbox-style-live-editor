import React, {useEffect, useMemo, useRef, useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {useMediaQuery, Button, List, ListItem, ListItemText} from '@material-ui/core';
import CodeMirror from '@uiw/react-codemirror';

import {ResponsiveHeader,  Map} from '@geomatico/geocomponents';

import {WIDESCREEN_STEP, INITIAL_VIEWPORT, LOCALSTORAGE_ENTRY} from '../config';
import Logo from '../components/icons/Logo';

import styleJson from '../style.json';
import 'codemirror/theme/monokai.css';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/search/search';
import 'codemirror/addon/search/searchcursor';
import {Popup} from 'react-map-gl';
import {loadStateFromLocalStorage, localStorageWrapper} from '../utils/localStorage';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: '90vh'
  },
  mapContent: {
    flexGrow: 1,
    padding: 0,
    position: 'absolute',
    top: theme.mixins.toolbar.minHeight + 10,
    bottom: 0,
    right: 0,
    left: /*({isSidePanelOpen, widescreen}) => isSidePanelOpen && widescreen ? DRAWER_WIDTH : */0,
  },
  layerlabel: {
    letterSpacing: 1.05,
    paddingLeft: 25,
  },
  legend: {
    fontSize: 12,
    marginLeft: 22
  },
  legendIcon: {
    marginLeft: 25,
  },
  label: {
    color: '#ffffff'
  }
}));

const initialViewport = () => {
  let initialViewport = {...INITIAL_VIEWPORT};
  if (document.URL.includes('#')){
    try {
      const [zoom, latitude, longitude, bearing, pitch] =
        document.URL
          .split('#')[1]
          .split('/')
          .map(param => parseFloat(param));
      initialViewport = {
        ...initialViewport,
        zoom, latitude, longitude, bearing, pitch
      };
    }
    // eslint-disable-next-line no-empty
    finally {
    }
  }
  return initialViewport;
};

const initialStyleLoad = () => {
  const style = loadStateFromLocalStorage();
  return Object.keys(style).length ? style : styleJson;
};

const App = () => {
  const widescreen = useMediaQuery(`(min-width: ${WIDESCREEN_STEP})`, {noSsr: true});
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);
  const [style, setStyle] = useState(initialStyleLoad());
  const [viewport, setViewport] = useState(initialViewport());
  const classes = useStyles({isSidePanelOpen, widescreen});
  const [layersClicked, setLayersClicked] = useState(undefined);

  const editor = useRef();
  const inputRef = useRef();

  const cmOptions = useMemo(() => ({
    theme: 'monokai',
    mode: 'json',
    height: 'auto',
    viewportMargin: Infinity,
    lint: true,
    lineNumbers: true,
    lineWrapping: true,
    indentWithTabs: false,
    tabSize: 2,
    fold: 'auto',
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
  }), []);

  const onViewportChange = (viewport) =>
    setViewport({
      ...viewport
    });
  const handleClose = () => setIsSidePanelOpen(!isSidePanelOpen);

  const handleMapClick = (e) => {
    if (e.features){
      setLayersClicked({
        lngLat: e.lngLat,
        layers: Array.from(new Set(e.features.map(feat => feat.layer.id)))
      });
    }
  };

  const handleClosePopup = () => setLayersClicked(undefined);

  const handleLayerClickOnPopup = (layer) => {
    console.log(layer);
    const cursor = editor.current.editor.getSearchCursor(`"id": "${layer}"`);
    if (cursor.find()) {
      editor.current.editor.doc.getAllMarks().forEach(marker => marker.clear());
      editor.current.editor.markText(
        cursor.from(),
        cursor.to(),
        {className: 'cm-searching'}
      );
      editor.current.editor.setCursor({
        ...cursor.from()
      });
    }
  };

  const handleImportStyle = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = (e) => {
      const fileContents = e.target.result;
      setStyle(JSON.parse(fileContents));
    };
  };

  useEffect(() =>
    localStorageWrapper.save(LOCALSTORAGE_ENTRY, style)
  , [style]);
  
  return (
    <>
      <ResponsiveHeader
        logo={<Logo/>}
        logoStyleProps={{
          width: 170,
          paddingTop: 0,
        }}
        title="Mapbox Style Live Editor"
        onStartIconClick={widescreen ? undefined : handleClose}
      >
        <input
          type="file"
          ref={inputRef}
          onChange={handleImportStyle}
          hidden
        />
        <Button className={classes.label} onClick={() => inputRef.current.click()}>
              Upload Your Style
        </Button>
        <Button className={classes.label} onClick={() => window.open('https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/', '_blank').focus()}>
              Mapbox Style Spec
        </Button>
      </ResponsiveHeader>
      <main className={classes.mapContent}>
        <div style={{
          width: '50%',
          height: '100%',
          float: 'left',
        }}
        >
          <Map
            hash
            mapStyle={style}
            viewport={viewport}
            onViewportChange={onViewportChange}
            onClick={handleMapClick}
            clickRadius={5}
          >
            {layersClicked &&
            <Popup
              longitude={layersClicked.lngLat[0]}
              latitude={layersClicked.lngLat[1]}
              closeButton={true}
              closeOnClick={false}
              onClose={handleClosePopup}
            >
              <List component="nav" >
                {
                  layersClicked.layers.map(layer => 
                    <ListItem button key={layer} onClick={() => handleLayerClickOnPopup(layer)}>
                      <ListItemText primary={layer} />
                    </ListItem>
                  )
                }
              </List>

            </Popup>
            }
          </Map>
        </div>
        <div 
          style={{
            width: '49.9%',
            height: '100%',
            float: 'right',
          }}
        >
          <CodeMirror
            ref={editor}
            value={JSON.stringify(style, null, 2)}
            options={cmOptions}
            onChange={(value) => {
              setStyle(JSON.parse(value.getValue()));
            }}
          />
        </div>
      </main>
    </>
  );
};
export default App;