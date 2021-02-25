import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mirador from './components/Mirador';

// config
// https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { title } = this.props;

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
                  'https://rfta.test/manifest/rfta_100.json',
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
