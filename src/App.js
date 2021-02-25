import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mirador from './components/Mirador';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
            },
            windows: [
              {
                loadedManifest:
                  'http://localhost:8080/iiif/manifest/image.json',
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

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
