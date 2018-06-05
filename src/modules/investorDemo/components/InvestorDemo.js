import React, {Component} from 'react';
import WrappedInsuranceForm from './InsuranceForm';
import ClusterGraph from './ClusterGraph';
import {getInitialGraphData, submitFormData} from '../api';
import {Layout} from 'antd';
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
    console.log (values);
    this.setState ({isLoading: true});
    submitFormData (values).then (data => {
      console.log (data);
      this.setState ({
        isSuccess: true,
        isError: false,
        isLoading: false,
        clusterData: data,
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
