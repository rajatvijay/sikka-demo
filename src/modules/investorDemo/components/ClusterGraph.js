import React, {Component} from 'react';
import {makeForceDirectedGraph} from '../graphs';

class ClusterGraph extends Component {
  componentDidUpdate (previousProps) {
    if (this.props.data && previousProps.data !== this.props.data) {
      Object.keys (this.props.data).forEach (cluster => {
        makeForceDirectedGraph (this.props.data[cluster], cluster);
      });
    }
  }

  render () {
    return (
      <div style={{textAlign: 'center'}}>
        {this.props.data &&
          Object.keys (this.props.data).map (cluster => (
            <svg key={cluster} id={cluster} width="600" height="400" />
          ))}
      </div>
    );
  }
}

export default ClusterGraph;
