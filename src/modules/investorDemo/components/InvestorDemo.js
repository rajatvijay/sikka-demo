import React, {Component} from 'react';
import InsuranceForm from './InsuranceForm';
import ClusterGraph from './ClusterGraph';
import {getInitialGraphData} from '../api';

class InvestorDemo extends Component {
  state = {
    clusterData: null,
  };

  componentDidMount () {
    getInitialGraphData ().then (({data}) =>
      this.setState ({clusterData: data})
    );
  }

  render () {
    const {clusterData} = this.state;
    return (
      <div>
        <InsuranceForm />
        <ClusterGraph data={clusterData} />
      </div>
    );
  }
}

export default InvestorDemo;
