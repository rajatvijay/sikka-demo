import React, {Component} from 'react';
import {Input} from 'antd';
import {WSAEINVALIDPROCTABLE} from 'constants';

class InsuranceForm extends Component {
  state = {
    zipCode: '',
    carYear: '',
    carMake: '',
    carModel: '',
    deductible: 1,
    licenseTenure: '',
    incidents: '',
    coverage: 1,
  };

  handleInputChange = (field, event) => {
    const value = event.target.value;
    this.setState ({
      [field]: value,
    });
  };

  render () {
    const {
      zipCode,
      carYear,
      carMake,
      carModel,
      deductible,
      licenseTenure,
      incidents,
      coverage,
    } = this.state;
    return (
      <div>
        <Input
          placeholder="Zip Code"
          value={zipCode}
          type="number"
          onChange={e => this.handleInputChange ('zipCode', e)}
        />
        <Input
          placeholder="Car Year"
          value={carYear}
          type="number"
          onChange={e => this.handleInputChange ('carYear', e)}
        />
        <Input
          placeholder="Car Make"
          value={carMake}
          type="text"
          onChange={e => this.handleInputChange ('carMake', e)}
        />
        <Input
          placeholder="Car Model"
          value={carModel}
          type="number"
          onChange={e => this.handleInputChange ('carModel', e)}
        />
        <Input
          placeholder="Driver License Tenure"
          value={licenseTenure}
          type="number"
          onChange={e => this.handleInputChange ('licenseTenure', e)}
        />
        <Input
          placeholder="No. of Incidents"
          value={incidents}
          type="number"
          onChange={e => this.handleInputChange ('incidents', e)}
        />
      </div>
    );
  }
}

export default InsuranceForm;
