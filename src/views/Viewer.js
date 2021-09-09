import React, {useMemo, useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {useMediaQuery, Button} from '@material-ui/core';
import CodeMirror from '@uiw/react-codemirror';

import {ResponsiveHeader,  Map} from '@geomatico/geocomponents';

import {WIDESCREEN_STEP, INITIAL_VIEWPORT} from '../config';
import Logo from '../components/icons/Logo';

import styleJson from '../style.json';
import 'codemirror/theme/monokai.css';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/fold/foldgutter';

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

const App = () => {
  const widescreen = useMediaQuery(`(min-width: ${WIDESCREEN_STEP})`, {noSsr: true});
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);
  const [style, setStyle] = useState(styleJson);
  const [viewport, setViewport] = useState(initialViewport());
  const classes = useStyles({isSidePanelOpen, widescreen});

  const onViewportChange = (viewport) =>
    setViewport({
      ...viewport
    });
  const handleClose = () => setIsSidePanelOpen(!isSidePanelOpen);
  
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
          />
        </div>
        <div style={{
          width: '49.9%',
          height: '100%',
          float: 'right',
        }}
        >
          <CodeMirror
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