import React, {Component} from 'react';
import {makeForceDirectedGraph} from '../graphs';

class ClusterGraph extends Component {
  // state = {};

  // static getDerivedStateFromProps (props, state) {
  //   if (props.data) {
  //     makeForceDirectedGraph (props.data, 'clusterGraph');
  //   }
  //   return null;
  // }

  componentDidUpdate (previousProps) {
    if (this.props.data && previousProps.data !== this.props.data) {
      makeForceDirectedGraph (this.props.data, 'clusterGraph');
    }
  }

  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <svg id="clusterGraph" width="900" height="500" />
      </div>
    );
  }
}

export default ClusterGraph;
