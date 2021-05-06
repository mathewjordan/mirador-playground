import React, { Component } from 'react';
import Mirador from './components/Mirador';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workspace: null,
      manifest: null,
    };
  }

  componentDidMount() {

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);

    if (params.get('manifest')) {
      this.setState({
        workspace: false,
        manifest: params.get('manifest')
      })
    } else {
      this.setState({
        workspace: true
      })
    }

  }

  render() {
    const { workspace, manifest } = this.state;

    console.log(workspace)

    if (workspace === true) {
      return (
        <div className="container">
          <Mirador
            config={{
              id: 'mirador',
              workspaceControlPanel: {
                enabled: true,
              },
            }}
            plugins={[]}
          />
        </div>
      );
    } else if (workspace === false) {
      return (
        <div className="container">
          <Mirador
            config={{
              id: 'mirador',
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
    } else {
      return  null
    }
  }
}

export default App;
