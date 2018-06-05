import React, {Component} from 'react';
import {makeForceDirectedGraph} from '../graphs';

class ClusterGraph extends Component {
  static getDerivedStateFromProps (props, state) {
    if (props.data) {
      makeForceDirectedGraph (props.data, 'clusterGraph');
    }
    return null;
  }

  render () {
    const {data} = this.props;
    return (
      <div>
        <svg id="clusterGraph" width="500" height="500" />
      </div>
    );
  }
}

export default ClusterGraph;
