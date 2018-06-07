import React, {Component} from 'react';
import WrappedInsuranceForm from './InsuranceForm';
import ClusterGraph from './ClusterGraph';
import {getInitialGraphData, submitFormData} from '../api';
import {Layout} from 'antd';
import {addNewPointInTheClusters} from '../utils';
const {Header} = Layout;

class InvestorDemo extends Component {
  state = {
    clusterData: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
  };

  componentDidMount () {
    getInitialGraphData ().then (data => this.setState ({clusterData: data}));
  }

  handleFormSubmit = values => {
    this.setState ({isLoading: true});
    values = {
      ...values,
      licenseTenure: Number (values.licenseTenure),
      incidents: Number (values.incidents),
      carYear: new Date (values.carYear).getFullYear (),
      userName: 'Rajat',
    };
    submitFormData (values).then (data => {
      console.log (data);
      this.setState (previousState => {
        const newCluster = addNewPointInTheClusters (
          previousState.clusterData,
          data
        );
        return {
          isSuccess: true,
          isError: false,
          isLoading: false,
          clusterData: {...newCluster},
        };
      });
    });
  };

  render () {
    const {clusterData, isSuccess, isError, isLoading} = this.state;
    return (
      <div>
        <Layout>
          <Header>
            <div>
              <p style={{color: 'white', fontSize: 18}}>
                Sikka Investor Demo
              </p>
            </div>
          </Header>
        </Layout>
        <WrappedInsuranceForm
          onSubmit={this.handleFormSubmit}
          isSuccess={isSuccess}
          isError={isError}
          isLoading={isLoading}
        />
        <ClusterGraph data={clusterData} />
      </div>
    );
  }
}

export default InvestorDemo;
