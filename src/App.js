import React, { Component } from 'react';
import Mirador from './components/Mirador';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manifest: 'http://localhost:8080/iiif/manifest/nezperce.json',
    };
  }

  render() {
    const { manifest } = this.state;

    return (
      <div className="container">
        <Mirador
          config={{
            id: 'mirador',
            window: {
              allowFullscreen: false,
              sideBarPanel: 'info',
              hideWindowTitle: true,
              sideBarOpen: true,
              highlightAllAnnotations: true,
              forceDrawAnnotations: true,
            },
            windows: [
              {
                loadedManifest: manifest,
              },
            ],
            workspaceControlPanel: {
              enabled: false,
            },
          }}
          plugins={[]}
        />
      </div>
    );
  }
}

export default App;
